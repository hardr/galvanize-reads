
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
  .then(function () {
    return Promise.all([
      // Inserts seed entries
      knex('books').insert({
        title: 'Fahrenheit 451: A Novel',
        genre: 'Distopia',
        description: 'Guy Montag is a book-burning fireman undergoing a crisis of faith. His wife spends all day with her television "family," imploring Montag to work harder so that they can afford a fourth TV wall. Their dull, empty life sharply contrasts with that of his next-door neighbor Clarisse, a young girl thrilled by the ideas in books, and more interested in what she can see in the world around her than in the mindless chatter of the tube. When Clarisse disappears mysteriously, Montag is moved to make some changes, and starts hiding books in his home. Eventually, his wife turns him in, and he must answer the call to burn his secret cache of books. After fleeing to avoid arrest, Montag winds up joining an outlaw band of scholars who keep the contents of books in their heads, waiting for the time society will once again need the wisdom of literature.',
        cover_url: 'https://images-na.ssl-images-amazon.com/images/I/41Cx8mY2UNL._SX324_BO1,204,203,200_.jpg'
      }),
      knex('books').insert({
        title: 'Something Wicked This Way Comes',
        genre: 'Adventure',
        description: 'A masterpiece of modern Gothic literature, Something Wicked This Way Comes is the memorable story of two boys, James Nightshade and William Halloway, and the evil that grips their small Midwestern town with the arrival of a "dark carnival" one Autumn midnight. How these two innocents, both age 13, save the souls of the town (as well as their own), makes for compelling reading on timeless themes. What would you do if your secret wishes could be granted by the mysterious ringmaster Mr. Dark? Bradbury excels in revealing the dark side that exists in us all, teaching us ultimately to celebrate the shadows rather than fear them. In many ways, this is a companion piece to his joyful, nostalgia-drenched Dandelion Wine, in which Bradbury presented us with one perfect summer as seen through the eyes of a 12-year-old. In Something Wicked This Way Comes, he deftly explores the fearsome delights of one perfectly terrifying, unforgettable autumn.',
        cover_url: 'https://images-na.ssl-images-amazon.com/images/I/51reJAVMnrL._SX300_BO1,204,203,200_.jpg'
      }),
      knex('books').insert({
        title: 'Breakfast of Champions',
        genre: 'Satire',
        description: '"We are healthy only to the extent that our ideas are humane." So reads the tombstone of downtrodden writer Kilgore Trout, but we have no doubt who\'s really talking: his alter ego Kurt Vonnegut. Health versus sickness, humanity versus inhumanity--both sets of ideas bounce through this challenging and funny book. As with the rest of Vonnegut\'s pure fantasy, it lacks the shimmering, fact-fueled rage that illuminates Slaughterhouse-Five. At the same time, that makes this book perhaps more enjoyable to read.
        Breakfast of Champions is a slippery, lucid, bleakly humorous jaunt through (sick? inhumane?) America circa 1973, with Vonnegut acting as our Virgil-like companion. The book follows its main character, auto-dealing solid-citizen Dwayne Hoover, down into madness, a condition brought on by the work of the aforementioned Kilgore Trout. As Dwayne cracks, then crumbles, Breakfast of Champions coolly shows the effects his dementia has on the web of characters surrounding him. It\'s not much of a plot, but it\'s enough for Vonnegut to air unique opinions on America, sex, war, love, and all of his other pet topics--you know, the only ones that really count.',
        cover_url: 'https://images-na.ssl-images-amazon.com/images/I/41COKf-gqfL._SX326_BO1,204,203,200_.jpg'
      }),
      knex('books').insert({
        title: 'It',
        genre: 'Horror',
        description: 'Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.

        They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children. Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.',
        cover_url: 'https://images-na.ssl-images-amazon.com/images/I/51MeIXuanQL._SX326_BO1,204,203,200_.jpg'
      }),
      knex('books').insert({
        title: 'Harry Potter and the Philosopher\'s Stone',
        genre: 'Adventure',
        description: '"Harry Potter has never played a sport while flying on a broomstick. He\'s never worn a Cloak of Invisibility, befriended a giant, or helped hatch a dragon. All Harry knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley. Harry\'s room is a tiny cupboard under the stairs, and he hasn\'t had a birthday party in ten years.

        But all that is about to change when a mysterious letter arrives by owl messenger. A letter with an invitation to a wonderful place he never dreamed existed. There he finds not only friends, aerial sports, and magic around every corner, but a great destiny that\'s been waiting for him... if Harry can survive the encounter."',
        cover_url: 'https://images-na.ssl-images-amazon.com/images/I/31ZX10JMK3L._BO1,204,203,200_.jpg'
      }),
      knex('books').insert({
        title: 'The Tommyknockers',
        genre: 'Horror',
        description: 'Master storyteller Stephen King presents the classic, terrifying #1 New York Times bestseller about a terrifying otherworldly discovery and the effects it has on a small town.',
        cover_url: 'https://images-na.ssl-images-amazon.com/images/I/51r3AnvB2YL._SX274_BO1,204,203,200_.jpg'
      }),
      knex('books').insert({
        title: '1984',
        genre: 'Distopia',
        description: 'Written in 1948, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, Orwell’s narrative is timelier than ever. 1984 presents a startling and haunting vision of the world, so powerful that it is completely convincing from start to finish. No one can deny the power of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.',
        cover_url: 'https://images-na.ssl-images-amazon.com/images/I/31BJ1bAJUGL._SX310_BO1,204,203,200_.jpg'
      }),
      knex('books').insert({
        title: 'Animal Farm',
        genre: 'Satire',
        description: 'Animal Farm is the most famous by far of all twentieth-century political allegories. Its account of a group of barnyard animals who revolt against their vicious human master, only to submit to a tyranny erected by their own kind, can fairly be said to have become a universal drama. Orwell is one of the very few modern satirists comparable to Jonathan Swift in power, artistry, and moral authority; in animal farm his spare prose and the logic of his dark comedy brilliantly highlight his stark message.

        Taking as his starting point the betrayed promise of the Russian Revolution, Orwell lays out a vision that, in its bitter wisdom, gives us the clearest understanding we possess of the possible consequences of our social and political acts.',
        cover_url: 'https://images-na.ssl-images-amazon.com/images/I/314agQyvEQL._SX303_BO1,204,203,200_.jpg'
      })
    ]);
  });
};
