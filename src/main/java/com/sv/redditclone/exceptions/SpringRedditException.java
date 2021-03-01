package com.sv.redditclone.exceptions;

public class SpringRedditException extends  RuntimeException{
    public SpringRedditException(String exMsg, Exception exception){
        super(exMsg, exception);
    }

    public SpringRedditException(String exMsg){
        super(exMsg);
    }
}
