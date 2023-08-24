import tour1 from "../images/tour-1.jpeg"
import tour2 from "../images/tour-2.jpeg"
import tour3 from "../images/tour-3.jpeg"
import tour4 from "../images/tour-4.jpeg"


export const pagelinks = 
[{id :1, href:'#home', text:'home'},
{id :2, href:'#about', text:'about'},
{id :3, href:'#services', text:'services'},
{id :4, href:'#tours', text:'tours'},

];

export const socialLinks = [
    {id:1, href:'http://www.twitter.com/' , icon: 'fab fa-twitter'},
    {id:2, href:'http://www.facebook.com/' , icon: 'fab fa-facebook'},
    {id:3, href:'http://www.squarespace.com/' , icon: 'fab fa-squarespace'},
    
];

export const services = [
    {id : 1,
     icon: 'fas fa-wallet fa-fw', 
     serviceTitle:'saving money', 
     serviceDescription:'About saving money---Lorem ipsum dolor sit amet consectetur adipisicing eli Asperiores, officia.'
    },
    {id : 2,
     icon: 'fas fa-tree fa-fw',
     serviceTitle:'endless hiking',
     serviceDescription:'About hiking---Lorem ipsum dolor sit amet consectetur adipisicing eli    Asperiores, officia.'
    },
    {id : 3,        
     icon: 'fas fa-socks fa-fw', 
     serviceTitle:'amazing comfort', 
     serviceDescription:'About Amazing comfort---Lorem ipsum dolor sit amet consectetur adipisicing eli    Asperiores, officia.'
    }
];

export const tours =[
    { id : 1,
      img : tour1 ,
      tourDate: 'august 26th, 2020',
      tourTitle:'Tibet Adventure',  
      tourDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elCumque  vitae tempore voluptatum maxime reprehenderit eum qu exercitationem fugit, qui corporis',
      tourPlace:'china',
      tourDuration:'6 days',
      tourPrice:'from $2100'

    },
    { id : 2,
        img : tour2 ,
        tourDate: 'october 11th, 2020',
        tourTitle:'Best of Java',  
        tourDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elCumque  vitae tempore voluptatum maxime reprehenderit eum qu exercitationem fugit, qui corporis',
        tourPlace:'Indonesia',
        tourDuration:'11 days',
        tourPrice:'from $1400'
  
      },
      { id : 3,
        img :  tour3 ,
        tourDate: 'Sep 4th, 2020',
        tourTitle:'Explore HongKong',  
        tourDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elCumque  vitae tempore voluptatum maxime reprehenderit eum qu exercitationem fugit, qui corporis',
        tourPlace:'HongKong',
        tourDuration:'8 days',
        tourPrice:'from $5000'
  
      },
      { id : 4,
        img :  tour4 ,
        tourDate: 'Dec 7th, 2020',
        tourTitle:'Kenya Highlights',  
        tourDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elCumque  vitae tempore voluptatum maxime reprehenderit eum qu exercitationem fugit, qui corporis',
        tourPlace:'Kenya',
        tourDuration:'20 days',
        tourPrice:'from $3300'
  
      },
      { id : 4,
        img :  tour4 ,
        tourDate: 'Dec 7th, 2020',
        tourTitle:'Kenya Highlights',  
        tourDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elCumque  vitae tempore voluptatum maxime reprehenderit eum qu exercitationem fugit, qui corporis',
        tourPlace:'Kenya',
        tourDuration:'20 days',
        tourPrice:'from $3300'
  
      }
]