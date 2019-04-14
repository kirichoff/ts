module.exports = {
    max: function (arr) {
        var maxch = 0;
        var row = 0;
        for (var i=0; i<arr.length;i++) {
            for (var j=0; j<arr[i].length;j++){
                if (arr[i][j]%2 == 0 ){
                    maxch=arr[i][j];
                    i=arr.length;
                    break;
                }
            }
        }
        for (var i=0; i<arr.length;i++) {
            for (var j=0; j<arr[i].length;j++){
                if (maxch < arr[i][j]&& arr[i][j]%2 == 0 ){
                    maxch=arr[i][j];
                    row = i;
                }
            }
        }
        return {max:maxch,row:row}
    },
    min: function (arr) {
        var minnech = 0;
        var column =0;
        for (var i=0; i<arr.length;i++) {
            for (var j=0; j<arr[i].length;j++){
                if (arr[i][j]%2 != 0 ){
                    minnech=arr[i][j];
                    i=arr.length;
                    break;
                }
            }
        }


        for (var i=0; i<arr.length;i++) {
            for (var j=0; j<arr[i].length;j++){
                if (minnech > arr[i][j]&& arr[i][j]%2 != 0 ){
                    minnech=arr[i][j];
                    column = j;
                }
            }
        }
        return {min: minnech,colum: column}
    },
    replace:  function (arr,maxch,minnech) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i][i] % 2 == 0) {
                arr[i][i] = maxch;
            } else {
                arr[i][i] = minnech;
            }
        }
        return arr;
    }
    ,
    main: function (arr){
        var max = this.max(arr).max;
        var min= this.min(arr).min;
        console.log("хуй "  + min);
        var rep = this.replace(arr,max,min);
        var rwo = this.max(arr).row;
        var col = this.min(arr);

            return {row: rwo,column: col.colum, ar: rep  }
        }
}






// module.exports = function warmup(arr) {
//
//     var maxch =0;
//     var row = 0;
//     var minnech = 0;
//     var column = 0;
//
//     console.log(arr.length+"  "+ arr[0].length);
//
//
//     for (var i=0; i<arr.length;i++) {
//         for (var j=0; j<arr[i].length;j++){
//             if (arr[i][j]%2 != 0 ){
//                 minnech=arr[i][j];
//                 i=arr.length;
//                 break;
//             }
//         }
//     }
//     for (var i=0; i<arr.length;i++) {
//         for (var j=0; j<arr[i].length;j++){
//             if (maxch < arr[i][j]&& arr[i][j]%2 == 0 ){
//                 maxch=arr[i][j];
//                 row = i;
//             }
//         }
//     }
//
//     for (var i=0; i<arr.length;i++) {
//         for (var j=0; j<arr[i].length;j++){
//             if (minnech > arr[i][j]&& arr[i][j]%2 != 0 ){
//                 minnech=arr[i][j];
//                 column = j;
//             }
//         }
//     }
//
//
//     for (var i=0; i<arr.length;i++) {
//         if (arr[i][i]%2 == 0){
//             arr[i][i] = maxch;
//         }
//         else {
//             arr[i][i] = minnech;
//         }
//     }
//
//         return { column: column, row: row, ar: arr };
// }
