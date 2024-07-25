document.getElementById("q").innerHTML=`<h1>The only way to achieve the impossible is to believe it is possible.</h1> <p>Charles Kingsleigh</p>`

function ans(){
   let arr= [
    { quote: "Believe you can and you're halfway there.", 
        author: "Theodore Roosevelt" },
        
    { quote: "Dream big. Start small. Act now.", 
        author: "Robin Sharma" },
        
    { quote: "The future belongs to those who believe.", 
        author: "Eleanor Roosevelt" },
        
    { quote: "Success is not final, failure is not fatal.", 
        author: "Winston Churchill" },
        
    { quote: "Nothing is impossible, 'I'm possible'!", 
        author: "Audrey Hepburn" },
        
    { quote: "If you can dream it, you can do it.", 
        author: "Walt Disney" },
        
    { quote: "You are never too old to set another goal.", 
        author: "C.S. Lewis" },
        
    { quote: "Believe in yourself and all that you are.", 
        author: "Christian D. Larson" },
        
    { quote: "The only limit is our doubts of today.",
        author: "Franklin D. Roosevelt" },
        
    { quote: "It does not matter how slowly you go.", 
        author: "Confucius" },
        
    { quote: "Success consists of going from failure to failure.", 
        author: "Winston Churchill" },
        
    { quote: "Aim for the moon. Hit a star.", 
        author: "W. Clement Stone" },
        
    { quote: "Your attitude determines your altitude.",
        author: "Zig Ziglar" },
        
    { quote: "Optimism is the faith that leads to achievement.", 
        author: "Helen Keller" },
        
    { quote: "Start where you are. Use what you have.", 
        author: "Arthur Ashe" },
        
    { quote: "When you feel like quitting, think about why you started.",
        author: "Unknown" },
        
    { quote: "Don’t be pushed around by fears in your mind.",
        author: "Roy T. Bennett" },
        
    { quote: "Success is how you make a positive difference.", 
        author: "Roy T. Bennett" },
        
    { quote: "Challenges make life interesting. Overcoming them makes life meaningful.",
        author: "Joshua J. Marine" },
        
    { quote: "Everything you’ve wanted is on the other side of fear.",
        author: "George Addair" },
        
        {
            quote: "Don't be afraid to give up the good to go for the great.",
            author: "John D. Rockefeller"
          },

          {
            quote: "Believe you deserve it and the universe will serve it.",
            author: "Unknown"
          },
          
          {
            quote: "If you can dream it, you can do it.",
            author: "Walt Disney"
          },
          {
            quote: "Dream big. Start small. Act now.",
            author: "Robin Sharma"
          },
          {
            quote: "Nothing great was ever achieved without enthusiasm.",
            author: "Ralph Waldo Emerson"
          },
          {
            quote: "When you feel like quitting, think about why you started.",
            author: "Unknown"
          },
          {
            quote: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
          },
          {
            quote: "Everything you’ve ever wanted is on the other side of fear.",
            author: "George Addair"
          },
          {
            quote: "You must expect great things of yourself before you can do them.",
            author: "Michael Jordan"
          },
          {
            quote: "You are never too old to set another goal or to dream a new dream.",
            author: "C.S. Lewis"
          },
          
            { quote: "Strive for greatness.", 
               author: "Unknown" },
            { quote: "Be the change you wish to see.",
                author: "Mahatma Gandhi" },
            { quote: "Keep going. Be all in.",
                author: "Unknown" },
            { quote: "Make it happen. Shock everyone.", "author": "Unknown" },
            { quote: "Believe. Achieve. Succeed.", 
               author: "Unknown" },
            { quote: "Find joy in the journey.",
                author: "Unknown" },
            { quote: "You are your only limit.", 
               author: "Unknown" },
            { quote: "Live life with no regrets.", 
               author: "Unknown" },
            { quote: "Follow your passion. It will lead you to your purpose.", 
               author: "Unknown" },
            { quote: "Dream bigger. Do bigger.", 
               author: "Unknown" },
            { quote: "Make today amazing.", 
               author: "Unknown" },
            { quote: "Stay hungry. Stay foolish.",
                "author": "Steve Jobs" },
            { quote: "Keep your eyes on the stars.",
                author: "Unknown" },
            { quote: "Love what you do. Do what you love.",
                author: "Unknown" },
            { quote: "Strive for progress, not perfection.", 
               author: "Unknown" },
            { quote: "Never give up on your dreams.", 
               author: "Unknown" },
            { quote: "Be fearless. Be kind. Be you.", 
               author: "Unknown" },
            { quote: "The journey is the reward.", 
               author: "Unknown" },
            { quote: "Every day is a second chance.", 
               author: "Unknown" },
            { quote: "Create your own sunshine.", 
               author: "Unknown" }
          
          
  ]
  

  let c=Math.round((Math.random()*arr.length));

    if(c < arr.length)
    {
        document.getElementById("q").innerHTML=`<h1>${arr[c].quote}</h1> <p>${arr[c].author}</p>`
    }
    else{
         document.getElementById("q").innerHTML=`<h1>${arr[c].quote}</h1> <p>${arr[c].author}</p>`
    }

  
}