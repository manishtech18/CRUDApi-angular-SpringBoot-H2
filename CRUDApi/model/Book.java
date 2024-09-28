package com.example.CRUDApi.model;

 import com.fasterxml.jackson.annotation.JsonAnySetter;
 import com.fasterxml.jackson.annotation.JsonGetter;
 import com.fasterxml.jackson.annotation.JsonSetter;
 import jakarta.persistence.*;
 import org.springframework.http.HttpStatus;
 import org.springframework.http.ResponseEntity;

@Entity
 @Table(name="Books")


public class Book {
     @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;

    private String author;

    //Getter for id
    public Long getId(){
        return id;
    }
    //Setter for id
    public void setId(Long id){

        this.id=id;
    }

    //Getter for title
    public String getTitle(){
        return title;
    }
    //Setter for title
    public void setTitle(String title){
        this.title=title;
    }

    //Getter for author
    public String getAuthor(){
        return author;
    }
    //Setter for author
    public void setAuthor(String author){
        this.author=author;
    }

 }
