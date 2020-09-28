# mongoose crud

### 여러줄 insert
```
db.createCollection("test");

db.test.insert([
    {"name": "fastcampus", "lecture": "nodejs"},
    {"name": "house", "lecture": "python"},
    {"member": "person", "lecture": "python"}
]);
```

### board collection 임시데이터 삽입
```
db.board.insert([
    {
        "title" : "Hello",
        "content" : "첫번째글입니다.",
        "writer" : "admin",
        "hit" : 2
    },
    {
        "title" : "Hi",
        "content" : "두번째 글입니다.",
        "writer" : "admin",
        "hit" : 23
    },
    {
        "title" : "test",
        "content" : "세번째 글입니다.",
        "writer" : "test",
        "hit" : 10
    }
])
```

### 쿼리문
```
db.board.find()

db.board.find().pretty()

db.board.find( { "writer" : "admin" } ).pretty()

db.board.find( { "writer" : "admin" , "title" : "Hello" } ).pretty()

조회수 > 20 조회
db.board.find( { "hit" : { $gt : 20 }} ).pretty()

조회수 < 20 조회
db.board.find( { "hit" : { $lt: 20 }} ).pretty()

5 < 조회수 < 20
db.board.find( { "hit" : { $gt : 5 , $lt:20 }} ).pretty()


```

### and
admin 이면서 조회수 10아래
```
db.board.find( 
     { 
            $and : [ 
                 { "writer" : "admin" }, 
                 { "hit" : { $lt:10 } }
             ] 
     }
).pretty()

```

### count, sort, limit
```
db.board.find().count()

db.board.find().sort( { "hit" : -1 })

db.board.find().limit(2)

db.board.find().skip(1)
```

### update
```

db.board.update({ "title" : "test" } , {  "content": "content update!" } );

db.board.update(
    { "title" : "Hello" } , 
    { 
        $set : {  "content": "content update!" }
    }
)
```

### remove
```
db.board.remove({ "writer" : "test2" })
```