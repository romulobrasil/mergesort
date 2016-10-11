/**
 * Segue uma implementação para Mergesort feito com Javascript. 
 * É um algoritmo bem simples, porém é uma opção bem eficiente.
 * Código adaptado para o Lab: MergeSort do Site Rômulo Brasil, 
 * que basicamente é na function merge. 
 *
 * @author Rômulo Brasil 
 * @URL https://romulobrasil.com
 */

var Mergesort = (function() {

    function sort(array) {

        var length = array.length,
            mid    = Math.floor(length * 0.5),
            left   = array.slice(0, mid),
            right  = array.slice(mid, length);

        if(length === 1) {
            return array;
        }

        return merge(sort(left), sort(right));
    }

    function merge(left, right) {
        var result = [];
        var prtConsole = document.getElementById("prtConsole");
        
        while(left.length || right.length) {

            if(left.length && right.length) {

                if(left[0] < right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }

            } else if (left.length) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
            
            prtConsole.innerHTML = prtConsole.innerHTML + result + '<br>';
            console.log(result);
        }

        return result.concat(left.length? left : right);
    }

    return {
        sort: sort
    };
})();