// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000600000000040004000400040001020203000000040000000000000000000000000000040000000000000000000000000004000000000000010202030000000000000102030004000000000000040000000000000000000000000000000000000400000000000000000000000000000400000000000000000000000000010300000000000000000000000004000000000000000000000000000400000000000000000000000000040000000000000000000500000103000000000000000000000002020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . 2 . 2 . 2 . 2 2 2 2 
. . . 2 . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
2 . . . . . . 2 2 2 2 . . . . . 
. 2 2 2 . 2 . . . . . . 2 . . . 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . 2 2 . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . 2 2 . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles4,sprites.dungeon.collectibleRedCrystal,myTiles.tile3,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
