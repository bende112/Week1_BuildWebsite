const myBlog = {
    title: "My music blog post",
    Artists: {
        rapper: "Tupac, Eminem, Nas, Lil Kim",
        soul: "Sade, Babyface",
        jazz: "Nate, Franklin, Amstrong",
        reggae: "Wailers, Inner circle",
        clasical: "Andrea Bocelli, Motzart, Handel"
    },
    otherArtists: ["MJ", "Mary J", "Busta", "Foo fighters"],
    content: "This objects thing is great when all comes together."
};

console.log(myBlog.Artists.clasical);
console.log(myBlog.otherArtists[3]);
console.log(myBlog.otherArtists.length);

console.log(
    `I have ${myBlog.otherArtists.length} artist for my blog "${myBlog.title}"`
);
    for (let i = 0; i < myBlog.otherArtists.length; i++){
        console.log(myBlog.otherArtists[i]);
    }

console.log(`OtherArtists on my post "${myBlog.title}":`);
for (let otherArtist of myBlog.otherArtists) {
    console.log(otherArtist);
}
