function Tree() {
    type = ""
}

Tree.prototype.bloom = function (){return this.type + " is blooming"}

const klon = new Tree();
klon.type = "klon";

console.log(klon);
console.log(klon.bloom());

const lipa = new Tree();
lipa.type = "lipa";
console.log(lipa)
console.log(lipa.bloom());