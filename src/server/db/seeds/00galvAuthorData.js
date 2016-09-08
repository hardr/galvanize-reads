
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('authors').insert({
          first_name: 'Ray',
          last_name: 'Bradbury',
          biography: 'In a career spanning more than seventy years, Ray Bradbury, who died on June 5, 2012, at the age of 91, inspired generations of readers to dream, think, and create. A prolific author of hundreds of short stories and close to fifty books, as well as numerous poems, essays, operas, plays, teleplays, and screenplays, Bradbury was one of the most celebrated writers of our time. His groundbreaking works include Fahrenheit 451, The Martian Chronicles, The Illustrated Man, Dandelion Wine, and Something Wicked This Way Comes. He wrote the screen play for John Huston\'s classic film adaptation of Moby Dick, and was nominated for an Academy Award. He adapted sixty-five of his stories for television\'s The Ray Bradbury Theater, and won an Emmy for his teleplay of The Halloween Tree. He was the recipient of the 2000 National Book Foundation Medal for Distinguished Contribution to American Letters, the 2004 National Medal of Arts, and the 2007 Pulitzer Prize Special Citation, among many honors.',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/415Xnu0pwBL._SX150_.jpg'
        }),
        knex('authors').insert({
          first_name: 'Kurt',
          last_name: 'Vonnegut',
          biography: 'Kurt Vonnegut was born in Indianapolis in 1922. He studied at the universities of Chicago and Tennessee and later began to write short stories for magazines. His first novel, Player Piano, was published in 1951 and since then he has written many novels, among them: The Sirens of Titan (1959), Mother Night (1961), Cat\'s Cradle (1963), God Bless You Mr Rosewater (1964), Welcome to the Monkey House; a collection of short stories (1968), Breakfast of Champions (1973), Slapstick, or Lonesome No More (1976), Jailbird (1979), Deadeye Dick (1982), Galapagos (1985), Bluebeard (1988) and Hocus Pocus (1990). During the Second World War he was held prisoner in Germany and was present at the bombing of Dresden, an experience which provided the setting for his most famous work to date, Slaughterhouse Five (1969). He has also published a volume of autobiography entitled Palm Sunday (1981) and a collection of essays and speeches, Fates Worse Than Death (1991).',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/31czNKLqxSL._SX150_.jpg'
        }),
        knex('authors').insert({
          first_name: 'Stephen',
          last_name: 'King',
          biography: 'Stephen King is the author of more than fifty books, all of them worldwide bestsellers. His recent work includes The Bill Hodges Trilogy, Revival, and Doctor Sleep. His novel 11/22/63 was named a top ten book of 2011 by The New York Times Book Review and won the Los Angeles Times Book Prize for Mystery/Thriller as well as the Best Hardcover Book Award from the International Thriller Writers Association. He is the recipient of the 2003 National Book Foundation Medal for Distinguished Contribution to American Letters. He lives in Bangor, Maine, with his wife, novelist Tabitha King.',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/61dWUcBJ10L._SY200_.jpg'
        }),
        knex('authors').insert({
          first_name: 'J K',
          last_name: 'Rowling',
          biography: 'J K (Joanne Kathleen) Rowling was born in the summer of 1965 at Yate General Hospital in England and grew up in Chepstow, Gwent where she went to Wyedean Comprehensive. Jo left Chepstow for Exeter University, where she earned a French and Classics degree, and where her course included one year in Paris. As a postgraduate she moved to London to work at Amnesty International, doing research into human rights abuses in Francophone Africa. She started writing the Harry Potter series during a Manchester to London King\'s Cross train journey, and during the next five years, outlined the plots for each book and began writing the first novel. Jo then moved to northern Portugal, where she taught English as a foreign language. She married in October 1992 and gave birth to her daughter Jessica in 1993. When her marriage ended, she returned to the UK to live in Edinburgh, where "Harry Potter & the Philosopher\'s Stone" was eventually completed and in 1996 she received an offer of publication. The following summer the world was introduced to Harry Potter. "Harry Potter and the Philosopher\'s Stone" was published by Bloomsbury Children\'s Books in June 1997 and was published as "Harry Potter and the Sorcerer\'s Stone" in America by Arthur A. Levine Books/Scholastic in September 1998.',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/31zc-85LuML._SX150_.jpg'
        }),
        knex('authors').insert({
          first_name: 'George',
          last_name: 'Orwell',
          biography: 'GEORGE ORWELL (1903-1950) was born in India and served with the Imperial Police in Burma before joining the Republican Army in the Spanish Civil War. Orwell was the author of six novels as well as numerous essays and nonfiction works.',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/217ZJ93nrQL._SX150_.jpg'
        })
      ]);
    });
};
