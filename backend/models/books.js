const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
const AdventureSchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
const FantasySchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
const FictionSchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
const HorrorSchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
const InspirationalSchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
const MysterySchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
const NonFictionSchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
const ScienceFictionSchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
const TechnologySchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
const ThrillerSchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    price:{
        type:String
    }
})
//deshbord
const collectionSchema= new mongoose.Schema({
    books: {
      type: [bookSchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Book' });
const Book=mongoose.model("book",collectionSchema)
//adventure
const collectionSchema_1 = new mongoose.Schema({
    Adventure: {
      type: [AdventureSchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Adventure' });
const adventure=mongoose.model("Adventure",collectionSchema_1)
//fantasy
const collectionSchema_2 = new mongoose.Schema({
    Fantasy: {
      type: [FantasySchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Fantasy' });
const fantasy=mongoose.model("Fantasy",collectionSchema_2)
//fiction
const collectionSchema_3= new mongoose.Schema({
    Fiction: {
      type: [FictionSchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Fiction' });
const fiction=mongoose.model("Fiction",collectionSchema_3)
//horror
const collectionSchema_4= new mongoose.Schema({
    horror: {
      type: [HorrorSchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Horror' });
const horror=mongoose.model("Horror",collectionSchema_4)
//inspirational
const collectionSchema_5= new mongoose.Schema({
    inspirational: {
      type: [InspirationalSchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Inspirational' });
const inspiration=mongoose.model("Inspirational",collectionSchema_5)
//mystery
const collectionSchema_6= new mongoose.Schema({
    mystery: {
      type: [MysterySchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Mystery' });
const mystery=mongoose.model("Mystery",collectionSchema_6)
//non-fiction
const collectionSchema_7= new mongoose.Schema({
    non_fiction: {
      type: [NonFictionSchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Non_fiction'});
const Non_fiction=mongoose.model("Non_fiction",collectionSchema_7)
//science-fiction
const collectionSchema_8= new mongoose.Schema({
    science_fiction: {
      type: [ScienceFictionSchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Science_Fiction'});
const Science_fiction=mongoose.model("Science_Fiction",collectionSchema_8)
//techenlogy
const collectionSchema_9= new mongoose.Schema({
    technology: {
      type: [TechnologySchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Technology'});
const Technology_1=mongoose.model("Technology",collectionSchema_9)
//thriller
const collectionSchema_10= new mongoose.Schema({
    thriller: {
      type: [ThrillerSchema],  // Array of books (each book follows the bookSchema)
      required: true
    }
  }, { collection: 'Thriller'});
const thriller_1=mongoose.model("Thriller",collectionSchema_10)
module.exports={
    Book,
    adventure,
    fantasy,
    fiction,
    horror,
    inspiration,
    mystery,
    Non_fiction,
    Science_fiction,
    Technology_1,
    thriller_1
};
