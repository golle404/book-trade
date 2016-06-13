import passport from 'passport';
import express, {Router} from 'express';
import Account from './../models/Account';
import Book from './../models/Book';

let router = Router();

router.post("/api/getBooks", isLoggedIn, function(req, res){
	Book.find({}, function(err, data){
		if(err){
			return res.send({error:err});
		}else{
			res.send(data);
		}
	})
});

router.post("/api/bookStatus", isLoggedIn, function(req, res){
	const update = genUpdate(req.body.type, req.user._id);
	Book.findByIdAndUpdate(req.body.id, update, {new:true}, function(err, data){
		if(err){
			return res.send({error:err});
		}else{
			res.send(data);
		}
	})
});

router.post("/api/addBook", isLoggedIn, function(req, res){
	const bookObj = {title: req.body.title, author: req.body.author, ownerId: req.body.ownerId};
	Book.create(bookObj, function(err, book){
		if(err){
			return res.send("error");
		} else{
			res.send("success");
		}
	})
});

router.post("/api/auth", function(req, res){
	if(req.body.register == "true"){
		registerAccount(req, res);
	}else{
		loginAccount(req, res);
	}
});

router.post("/api/getAuthUser", isLoggedIn, function(req, res){
	Account.findByUsername(req.user.username, function(err, account){
		if(err){
			return res.send({error: err});
		}else{
			res.send(account);
		}
	})
})

router.post("/api/updateAccount", isLoggedIn, function(req, res){
	let update = {};
	update.email = req.body.email;
	update.country = req.body.country;
	update.city = req.body.city;
	Account.findByIdAndUpdate(req.body.id, update, {new:true}, function(err, data){
		if(err){
			return res.send({error:err});
		}else{
			res.send(data);
		}
	})
})

router.post("/api/resetPassword", isLoggedIn, function(req, res){
	console.log("ressert",req.body.pwd)
	Account.findById(req.body.id, function(err, account){
		if(err){
			return res.send({error:err});
		}else{
			account.setPassword(req.body.pwd, function(err, user){
				user.save()
				res.send("success")
			})
		}
	})
})

function registerAccount(req, res){
	Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        return res.send({error: err});
      }
      passport.authenticate('local')(req, res, function () {
        res.send(account);
      });
  });
}

function loginAccount(req, res){
	passport.authenticate('local')(req, res, function(){
		Account.findByUsername(req.body.username, function(err, account){
			if (err) {
        return res.send({error: err});
      }else{
				res.send(account);
			}
		})
	})
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
    	return next();
    }
    res.send({error: "Unauthorized"});
}

function genUpdate(type, userId){
	let update = {};
	switch (type) {
		case "approve":
			update = {approved: true};
			break;
		case "request":
			update = {requested: userId};
			break;
		case "cancel":
			update = {requested: ""};
			break;
		default:
			break;
	}
	return update;
}

export default router;
