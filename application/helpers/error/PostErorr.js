class PostError extends Error{
    contructor(message, redirectURL, status){
        super(message);
        this.redirectURL = redicrectURL;
        this.status =status;
    }
    getMessage(){
        return this.message;
    }
    getRedirectURL(){
        return this.getRedirectURL;
    }
    getStatus(){
        return this.status;
    }

}

module.exports = PostError;