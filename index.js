import express from "express";
import bodyParser, { urlencoded } from "body-parser";
const app=express();
const port=4000;

app.use(bodyParser.urlencoded({extender:true}));
app.use(bodyParser.json());

const cricketers = [
  {
    id: 1,
    name: "Virat Kohli",
    age: 35,
    role: "Batsman",
    team: "India",
    status: "Still Playing"
  },
  {
    id: 2,
    name: "Kane Williamson",
    age: 33,
    role: "Batsman",
    team: "New Zealand",
    status: "Still Playing"
  },
  {
    id: 3,
    name: "Joe Root",
    age: 33,
    role: "Batsman",
    team: "England",
    status: "Still Playing"
  },
  {
    id: 4,
    name: "Steve Smith",
    age: 34,
    role: "Batsman",
    team: "Australia",
    status: "Still Playing"
  },
  {
    id: 5,
    name: "Jasprit Bumrah",
    age: 30,
    role: "Bowler",
    team: "India",
    status: "Still Playing"
  },
  {
    id: 6,
    name: "David Warner",
    age: 37,
    role: "Batsman",
    team: "Australia",
    status: "Still Playing"
  },
  {
    id: 7,
    name: "MS Dhoni",
    age: 42,
    role: "Wicketkeeper Batsman",
    team: "India",
    status: "Retired"
  },
  {
    id: 8,
    name: "AB de Villiers",
    age: 39,
    role: "Batsman",
    team: "South Africa",
    status: "Retired"
  },
  {
    id: 9,
    name: "Brian Lara",
    age: 55,
    role: "Batsman",
    team: "West Indies",
    status: "Retired"
  },
  {
    id: 10,
    name: "Shane Warne",
    age: 52,
    role: "Bowler",
    team: "Australia",
    status: "Retired"
  },
  {
    id: 11,
    name: "Sachin Tendulkar",
    age: 50,
    role: "Batsman",
    team: "India",
    status: "Retired"
  },
  {
    id: 12,
    name: "Jacques Kallis",
    age: 48,
    role: "All-rounder",
    team: "South Africa",
    status: "Retired"
  },
  {
    id: 13,
    name: "Ricky Ponting",
    age: 49,
    role: "Batsman",
    team: "Australia",
    status: "Retired"
  },
  {
    id: 14,
    name: "Wasim Akram",
    age: 58,
    role: "Bowler",
    team: "Pakistan",
    status: "Retired"
  },
  {
    id: 15,
    name: "Glenn McGrath",
    age: 54,
    role: "Bowler",
    team: "Australia",
    status: "Retired"
  },
  {
    id: 16,
    name: "Yuvraj Singh",
    age: 42,
    role: "All-rounder",
    team: "India",
    status: "Retired"
  },
  {
    id: 17,
    name: "Kumar Sangakkara",
    age: 46,
    role: "Wicketkeeper Batsman",
    team: "Sri Lanka",
    status: "Retired"
  },
  {
    id: 18,
    name: "Chris Gayle",
    age: 44,
    role: "Batsman",
    team: "West Indies",
    status: "Still Playing"
  },
  {
    id: 19,
    name: "Muttiah Muralitharan",
    age: 52,
    role: "Bowler",
    team: "Sri Lanka",
    status: "Retired"
  },
  {
    id: 20,
    name: "Michael Clarke",
    age: 43,
    role: "Batsman",
    team: "Australia",
    status: "Retired"
  }
];

  

app.get("/", (req,res)=>{
    try{
      res.json(cricketers);
    }catch(err){
      console.log(err);
    }
});

app.get("athelete/id", (req,res)=>{
  try{
    const id=parseInt(req.params.id);
    const athelete=find((athelete)=>cricketers.id===id);
    if(!athelete) return res.status(404).json({ message: "athelete not found" });
    else res.json(athelete);
  }catch(err){
    console.log(err);
  }
});

app.post("/add", (req,res)=>{
    const newAthelete={
        id:cricketers.length+1,
        name:req.body.name,
        age:req.body.age,
        role:req.body.role,
        team:req.body.team,
        status:req.body.status
    };
    cricketers.push(newAthelete);
    res.json(newAthelete);
});

app.patch("/edit/:id", (req,res)=>{
    const id=parseInt(req.params.id);
    const athelete=find((a)=>a.id===id);
    if(!athelete) res.status(404).json({message:"cannot find the athelete"});
    if(req.body.age) athelete.age=req.body.age;
    if(req.body.role) athelete.role=req.body.role;
    if(req.body.team) athelete.team=req.body.team;
    if(req.body.status) athelete.status=req.body.status;
    res.json(athelete);
});

app.delete("/delete/:id", (req,res)=>{
    const index=cricketers.findIndex((a)=>a.id===parseInt(req.params.id));
    if(index===-1) res.status(404).json({message: "cannot find the athelete"});
    cricketers.splice(index,1);
    res.json(cricketers[index]);
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
  });
  
