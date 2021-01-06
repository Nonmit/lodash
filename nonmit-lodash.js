var nonmit = {
    /**
     * 判断一个数值是否为NaN
     * @param {Number} val 
     * @returns {Boolean}
     */
    isNaN: function(val){
        let tmp = val;
        val = Number(val);
        if(val !== val && tmp !== undefined){
            return true;
        }else{
            return false;
        }
    },
    /**
     * 判断一个数字是否为null
     * @param  {Number} val 
     * @returns {Boolean}
     */
    isNull: function(val){
        if(val === null){
            return true;
        }else{
            return false;
        }
    },
    /**
     * 以size拆分成数组块，并返回由这些数组块组成的数组
     * @param {Array} array 
     * @param {Number} size 
     * @returns {Array}
     */
    chunk: function(array, size = 1){
        if(array.length == 0) return [];
        let ans = [];
        let cnt = 0;
        ans[0] = [];
        ans[0][0] = array[0]; 
        for(let i = 1; i < array.length; i ++){
            if(i % size == 0){
                cnt ++;
                ans[cnt] = [];
            }
            ans[cnt][i % size] = array[i];
        }

        return ans;
    },
    /**
     * 返回一个新数组，包括原数组中所有的非假元素
     * @param {Array} array 
     * @returns {Array}
     */
    compact : function(array){
        let ans = [];
        for(let i = 0; i < array.length; i ++){
            if(array[i])
                ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 返回一个将原数组与任何值或者数组连接起来的数组
     * @param {Array} array 
     * @param  {...any} args
     * @returns {Array} 
     */
    concat: function(array, ...args){
        let ans = [];
        for(let i in array){
            ans[ans.length] = array[i];
        }
        for(let i = 0; i < args.length; i ++){
            if(Array.isArray(args[i])){
                for(let j in args[i])
                    ans[ans.length] = args[i][j];
            }else
                ans[ans.length] = args[i];
            
        }
        return ans;

    },
    /**
     * 返回一个原数组中没有在其余数组中出现的元素的集合
     * @param {Array} array 
     * @param  {...Array} args 
     * @returns {Array}
     */
    difference: function(array, ...args){
        let map = {};
        let ans = [];
        for(let i = 0; i < array.length; i ++){
            map[array[i]] = true;
        }
        for(let i in args){
            for(let j in args[i]){
                if(map[args[i][j]]) map[args[i][j]] = false;
            }
        }
        for(let i in array){
            if(map[array[i]]){
                ans[ans.length] = array[i];
            }
        }
        return ans;
    },
    /**
     * 返回一个去掉前n项的数组
     * @param {Array} array 
     * @param {Number} n 
     * @returns {Array}
     */
    drop: function(array, n = 1){

        let ans = [];
        for(let i = n; i < array.length; i ++){
            ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 将原数组中的某段区间数值填充为val
     * @param {Array} array 
     * @param {any} val 
     * @param {Number} start 
     * @param {Number} end 
     */
    fill: function(array, val, start = 0, end = array.length){
        let ans = [];
        for(let i = 0; i < start; i ++){
            ans[ans.length] = array[i];
        }
        for(let i = start; i < end; i ++){
            ans[ans.length] = val;
        }
        for(let i = end; i < array.length; i ++){
            ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 返回数组第一个数
     * @param {Array} array
     * @returns {Number} 
     */
    head: function(array){
        return array[0];
    },
    /**
     * 返回一个新的减少一级array嵌套深度的数组
     * @param {Array} array 
     * @returns {Array}
     */
    flatten: function(array){

        let ans = [];
        for(let i in array){
            if(Array.isArray(array[i]))
                for(let j in array[i])
                    ans[ans.length] = array[i][j];
            else ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 从某个起始值开始，返回第一个出现val的下标
     * @param {Array} array 
     * @param {Number} val 
     * @param {Number} fromIndex 
     */
    indexOf: function(array, val, fromIndex = 0){
        for(let i = fromIndex; i < array.length; i ++){
            if(array[i] === val || (val !== val && array[i] !== array[i])) return i;
        }
        return -1;
    },
    /**
     * 去除数组中的最后一个数
     * @param {Array} array 
     */
    initial: function(array){
        let ans = [];
        for(let i = 0; i < array.length - 1; i ++){
            ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 将 array 中的所有元素转换为由 separator 分隔的字符串
     * @param {Array} array 
     * @param {String} separator 
     * @returns {String}
     */
    join: function(array, separator = ','){
        let ans = '';
        if(array.length != 0) ans += '' + array[0];
        for(let i = 1; i < array.length; i ++){
            ans += '' + separator + array[i];
        }
        return ans;
    },
    /**
     * 获取array中的最后一个元素
     * @param {Array} array 
     * @returns {any} 
     */
    last: function(array){
        return array[array.length - 1];
    },
    /**
    * 从某个起始值从右往左，返回第一个出现val的下标
    * @param {Array} array 
    * @param {Number} val 
    * @param {Number} fromIndex 
    */
    lastIndexOf: function(array, val, fromIndex = array.length - 1){
       for(let i = fromIndex; i >= 0; i --){
           if(array[i] === val || (val !== val && array[i] !== array[i])) return i;
       }
       return -1;
    },
    /**
     * 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
     * @param {Array} array 
     * @param {Number} n 
     */
    nth: function(array, n = 0){
        if(n >= 0)
            return array[n];
        else return array[array.length + n];
    },
    /**
     * 移除数组array中所有和给定值相等的元素
     * @param {Array} array 
     * @param  {...any} args 
     * @returns {Array}
     */
    pull: function(array, ...args){
        let map = {};
        let ans = [];
        for(let i in args){
            map[args[i]] = true;
        }
        for(let i in array){
            if(!map[array[i]]) ans[ans.length] = array[i];
        }
        array = [];
        for(let i in ans){
            array[i] = ans[i];
        }
        return array;
    },
    /**
     * 移除数组array中所有和给定值相等的元素, 函数接受两个数组参数
     * @param {Array} array 
     * @param {Array} values 
     * @returns {Array}
     */
    pullAll: function(array, values){
        let map = {};
        let ans = [];
        for(let i in values){
            map[values[i]] = true;
        }
        for(let i in array){
            if(!map[array[i]]) ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。
     * @param {Array} array 
     * @param  {...any} args 
     */
    pullAt: function(array, values){
        let map = {};
        let ans = [];
        let del = [];
        for(let i in values){
            map[values[i]] = true;
            del[del.length] = array[values[i]];
        }
        for(let i in array){
            if(!map[array[i]]) ans[ans.length] = array[i];
        }
        return del;
    },
    /**
     * 反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推
     * @param {Array} array
     * @returns {Array} 
     */
    reverse: function(array){
        let left = 0, right = array.length - 1;
        while(left < right){
            let tmp = array[left];
            array[left] = array[right];
            array[right] = tmp;
            left ++;
            right --;
        }
        let ans = [];
        for(let i in array){
            ans[i] = array[i];
        }
        return ans;
    },
    /**
     * 裁剪数组array，从 start 位置开始到end结束
     * @param {Array} array 
     * @param {Number} start 
     * @param {Number} end 
     * @returns {Array}
     */
    slice: function(array, start = 0, end = array.length){
        let ans = [];
        for(let i = start; i < end; i ++){
            ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 用二分法在原排序数组中查找val应该插入的下标值
     * @param {Array} array 
     * @param {Number} val
     * @returns {Number} 
     */
    sortedIndex: function(array, val){

        let low = 0, high = array.length - 1;
        if(val > array[high]) return array.length;
        while(low < high){
            let mid = Math.floor((low + high) / 2);
            if(array[mid] < val) low = mid + 1;
            else high = mid - 1;
        }
        return low;
    },
    sortedIndexOf: function(array, val){
        let low = 0, high = array.length - 1;
        if(val > array[high]) return array.length;
        while(low < high){
            let mid = Math.floor((low + high) / 2);
            if(array[mid] < val) low = mid + 1;
            else high = mid;
        }
        if(low >= array.length || array[low] != val) return -1;
        return low;
    }
    ,
    /**
     * 获取除了array数组第一个元素以外的全部元素
     * @param {Array} array
     * @returns {Array} 
     */
    tail: function(array){
        let ans = [];
        for(let i = 1; i < array.length; i ++){
            ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 从array数组的起始元素开始提取n个元素
     * @param {Array} array 
     * @param {Number} n
     * @returns {Array} 
     */
    take: function(array, n = 1){
        let ans = [];
        for(let i = 0; i < n; i ++){
            if(i >= array.length) break;
            ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 从array数组的最后一个元素开始提取n个元素
     * @param {Array} array 
     * @param {Number} n
     * @returns {Array} 
     */
    takeRight: function(array, n = 1){

        let ans = [];
        for(let i = array.length - n; i < array.length; i ++){
            if(i < 0) continue;
            ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 返回一个并集
     * @param  {...any} arrays 
     */
    union: function(...arrays){
        let map = {};
        let ans = [];
        for(let i in arrays){
            for(let j in arrays[i]){
                if(!map[arrays[i][j]]){
                    map[arrays[i][j]] = true;
                    ans[ans.length] = arrays[i][j];
                }
            }
        }
        return ans;
    },
    /**
     * 数组去重
     * @param {Array} array 
     * @returns {Array}
     */
    uniq: function(array){
        let map = {};
        let ans = [];
        for(let i in array){
            if(!map[array[i]]){
                map[array[i]] = true;
                ans[ans.length] = array[i];
            }
        }
        return ans;
    },
    /**
     * 删除数组中给定值的元素，返回新数组
     * @param {Array} array 
     * @param  {...any} args 
     */
    without: function(array, ...args){
        let map = {};
        let ans = [];
        for(let i in args){
            map[args[i]] = true;
        }
        for(let i in array){
            if(!map[array[i]]) ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * 一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推
     * @param  {...Array} arrays
     * @returns {Array} 
     */
    zip: function(...arrays){
        let ans = [];
        ans[0] = [];
        let cnt = 0;
        let maxLen = 0;
        for(let i in arrays){
            maxLen = maxLen > arrays[i].length ? maxLen : arrays[i].length;
        }
        for(let j = 0; j < maxLen; j ++){
            ans[cnt] = [];
            for(let i  in arrays){                                
                ans[cnt][ans[cnt].length] = arrays[i][cnt];
            }
            cnt ++;
        }
        return ans;

    },
    /**
     * 返回数组字符串或者对象的长度或者键值对的数量
     * @param {Array/Object} values 
     * @returns {Number}
     */
    size: function(values){
        if(Array.isArray(values) || typeof(values) === 'string')
            return values.length;
        else if(Object.prototype.toString.call(values) === '[object Object]'){
            let cnt = 0;
            for(let i in values){
                cnt ++;
            }
            return cnt;
        }
    },
    /**
     * 根据precision向下舍入 number
     * @param {Number} num 
     * @param {Number} precision 
     * @returns {Number}
     */
    floor: function(num, precision = 0){
        let ans = Math.pow(10, precision) * num;
        ans = Math.floor(ans);
        ans /= Math.pow(10, precision);
        return ans;
    },
    /**
     * 返回数组中的最大值 
     * @param {Array} array 
     * @returns {Number}
     */
    max: function(array){
        if(array == null || array.length == 0) return undefined;
        let ans = -Infinity;
        for(let i in array){
            ans = ans > array[i] ? ans : array[i];
        }
        return ans;
    },
    /**
     * 返回数组中的最小值 
     * @param {Array} array 
     * @returns {Number}
     */
    min: function(array){
        if(array == null || array.length == 0) return undefined;
        let ans = Infinity;
        for(let i in array){
            ans = ans < array[i] ? ans : array[i];
        }
        return ans;
    },
    /**
     * 返回数组的平均值 
     * @param {Array} array 
     * @returns {Number}
     */
    mean: function(array){
        if(array == null || array.length == 0) return undefined;
        let s = 0;
        for(let i in array){
            s += array[i];
        }
        return s / array.length;
    },
    /**
     * 根据precision四舍五入 number
     * @param {Number} num 
     * @param {Number} precision 
     */
    round: function(num, precision = 0){
        let ans = Math.pow(10, precision) * num;
        ans = Math.round(ans);
        ans /= Math.pow(10, precision);
        return ans;
    },
    /**
     * 返回数组的总和 
     * @param {Array} array 
     * @returns {Number}
     */
    sum: function(array){
        if(array == null || array.length == 0) return undefined;
        let s = 0;
        for(let i in array){
            s += array[i];
        }
        return s;
    },
    /**
     * 返回两数相除的商
     * @param {Number} dividend 
     * @param {Number} divisor
     * @returns {Number} 
     */
    divide: function(dividend, divisor){
        return dividend / divisor;
    },
    /**
     * 返回两数相加的和
     * @param {Number} augend 
     * @param {Number} addend 
     * @returns {Number} 
     */
    add: function(augend, addend ){
        return augend + addend;
    },
    /**
     * 根据precision向上舍入 number
     * @param {Number} num 
     * @param {Number} precision 
     */
    ceil: function(num, precision = 0){
        let ans = Math.pow(10, precision) * num;
        ans = Math.ceil(ans);
        ans /= Math.pow(10, precision);
        return ans;
    },
    /**
     * 返回两数相乘的积
     * @param {Number} augend 
     * @param {Number} addend 
     * @returns {Number} 
     */
    add: function(augend, addend ){
        return augend + addend;
    },
    /**
     * 返回两数相减的差
     * @param {Number} minuend  
     * @param {Number} subtrahend  
     * @returns {Number} 
     */
    subtract: function(minuend , subtrahend  ){
        return minuend  - subtrahend;
    },
    /**
     * 除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构
     * @param  {Array} arrays
     * @returns {Array} 
     */
    unzip: function(arrays){
        let ans = [];
        ans[0] = [];
        let cnt = 0;
        let maxLen = 0;
        for(let i = 0; i < arrays.length; i ++){
            maxLen = maxLen > arrays[i].length ? maxLen : arrays[i].length;
        }
        for(let j = 0; j < maxLen; j ++){
            ans[cnt] = [];
            for(let i = 0; i < arrays.length; i ++){                                
                ans[cnt][ans[cnt].length] = arrays[i][cnt];
            }
            cnt ++;
        }
        return ans;
    },
    /**
     * 返回一个去掉后n项的数组
     * @param {Array} array 
     * @param {Number} n 
     * @returns {Array}
     */
    dropRight: function(array, n = 1){
        let ans = [];
        for(let i = 0; i < array.length - n; i ++){
            ans[ans.length] = array[i];
        }
        return ans;
    },
    /**
     * value是否大于other
     * @param {*} value 
     * @param {*} other 
     * @returns {Boolean}
     */
    gt: function(value, other){
        return value > other;
    },
    /**
     * value是否大于或者等于other
     * @param {*} valus 
     * @param {*} other 
     * @returns {Boolean}
     */
    gte: function(value, other){
        return value >= other;
    },
    /**
     *创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组 
     * @param  {...Number} args
     * @returns {Array} 
     */
    range: function(...args){
        let ans = [];
        let start = 0;
        let end = 0;
        let step = 1;
        if(args.length == 1){
            end = args[0];
            if(end < 0)
                step = -1;
            if(end == 0) return [];
        }
        if(args.length == 2){
            start = args[0];
            end = args[1];
            if(start > end) step = -1;
        }
        if(args.length == 3){
            start = args[0];
            end = args[1];
            step = args[2];
        }
        ans[0] = start;
        if(step == 0){
            ans.length = Math.abs(start - end);
            ans.fill(start);
            return ans;
        }
        for(let i = 1; i < Math.abs((start - end) / step); i ++){
            ans[ans.length] = ans[ans.length - 1] + step;
        }
        return ans;

    },
    /**
     * 拆分字符串string中的词为数组
     * @param {String} string 
     * @param {RegExp} pattern 
     */
    words: function(string, pattern = /\w+/g){
        pattern.lastIndex = 0;
        let ans = [];
        while(pattern.lastIndex != null){
            let tmp = pattern.exec(string);
            if(tmp == null) break;
            else ans[ans.length] = tmp[0];
        }
        return ans;
    },
    /**
     * 首字母大写
     * @param {String} string
     * @returns {String} 
     */
    upperFirst: function(string){
        let ans = '';
        let start = 0;
        if(string[0].charCodeAt() >= 97 && string[0].charCodeAt() <= 122){
            ans += String.fromCharCode(string[0].charCodeAt() - 32);
            start = 1;
        }
        for(let i = start; i < string.length; i ++){
            ans += string[i];
        }
        return ans;
    },
    /**
     * 将字符串string转换为用空格分隔的大写单词
     * @param {String} string 
     * @returns {String}
     */
    upperCase: function(string){
        let ans = '';
        let point = 0;
        let flag = false
        for(let i = 0; i < string.length; i ++){
            if(string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122){
                ans += String.fromCharCode(string[i].charCodeAt() - 32);
                flag = true;
            }else if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90){
                if(flag){
                    ans += ' ';
                    flag = false;
                }
                ans += string[i];
            }else{
                if(flag){
                    ans +=' ';
                    flag = false;
                }
                continue;
            }
        }
        let res = '';
        if(ans[ans.length - 1] == ' '){
            for(let i = 0; i < ans.length - 1; i ++)
                res += ans[i];
            return res;
        }
        return ans;
    },
    /**
     * 首字母小写
     * @param {String} string
     * @returns {String} 
     */
    lowerFirst: function(string){
        let ans = '';
        let start = 0;
        if(string[0].charCodeAt() >= 65 && string[0].charCodeAt() <= 90){
            ans += String.fromCharCode(string[0].charCodeAt() + 32);
            start = 1;
        }
        for(let i = start; i < string.length; i ++){
            ans += string[i];
        }
        return ans;
    },
    /**
     * string字符串长度小于 length 则从左侧和右侧填充字符
     * @param {String} string 
     * @param {Number} length 
     * @param {String} chars
     * @returns {String}
     */
    pad: function(string, length = 0, chars= ' '){
        if(length < string.length) length = string.length;
        let mid = Math.floor((length - string.length) / 2);
        let ans = '';
        for(let i = 0; i < Math.floor(mid / chars.length); i ++){
            ans += chars;
        }
        for(let i = 0; i < mid % chars.length; i ++){
            ans += chars[i];
        }
        ans += string;
        for(let i = 0; i < Math.floor((length - string.length - mid) / chars.length); i ++){
            ans += chars;
        }
        for(let i = 0; i < (length - string.length - mid) % chars.length; i ++){
            ans += chars[i];
        }
        return ans;
    },
    /**
     * string字符串长度小于 length 则在右侧填充字符
     * @param {String} string 
     * @param {Number} length 
     * @param {String} chars
     * @returns {String}
     */
    padEnd: function(string, length = 0, chars= ' '){
        if(length < string.length) length = string.length;
        let ans = '';
        ans += string;
        for(let i = 0; i < Math.floor((length - string.length) / chars.length); i ++){
            ans += chars;
        }
        for(let i = 0; i < (length - string.length) % chars.length; i ++){
            ans += chars[i];
        }
        return ans;
    },
    /**
     * string字符串长度小于 length 则在右侧填充字符
     * @param {String} string 
     * @param {Number} length 
     * @param {String} chars
     * @returns {String}
     */
    padStart: function(string, length = 0, chars= ' '){
        if(length < string.length) length = string.length;
        let ans = '';
        for(let i = 0; i < Math.floor((length - string.length) / chars.length); i ++){
            ans += chars;
        }
        for(let i = 0; i < (length - string.length) % chars.length; i ++){
            ans += chars[i];
        }
        ans += string;
        return ans;
    },
    /**
     * 
     * 重复 N 次给定字符串
     * @param {String} string 
     * @param {Number} n
     * @returns {String} 
     */
    repeat: function(string, n = 1){
        let ans  = "";
        for(let i = 0; i < n; i ++){
            ans += string;
        }
        return ans;
    },
    /**
     * 将array递归为一维数组
     * @param {Array} array
     * @returns {Array} 
     */
    flattenDeep: function(array){    

        function getDeep(arr){
            let res = [];
            for(let i = 0; i < arr.length; i ++){
                if(Array.isArray(arr[i])){
                    let tmp = getDeep(arr[i]);
                    for(let i in tmp) 
                        res[res.length] = tmp[i];
                }else{
                    res[res.length] = arr[i];
                }
            }
            return res;
        }           
        return getDeep(array);
    },
    /**
     * 返回数组们的交集
     * @param  {...Array} arrays 
     * @returns {Array}
     */
    intersection: function(...arrays){

        let firstArr = [];
        for(let i = 0; i < arrays[0].length; i ++)
            firstArr[firstArr.length] = arrays[0][i];
        for(let i = 1; i < arrays.length; i ++){
            let tmp = getSame(firstArr, arrays[i]);
            firstArr = [];
            for(let i in tmp){
                firstArr[firstArr.length] = tmp[i];
            }
        }

        function getSame(arr1, arr2){
            let map = {};
            let ans = [];
            for(let i in arr1){
                map[arr1[i]] = true;
            }
            for(let i in arr2){
                if(map[arr2[i]]){
                    ans[ans.length] = arr2[i];
                }
            }
            return ans;
        }
        return firstArr;
    },
    /**
     * 返回数组们交集的补集；
     * @param  {...Array} arrays 
     * @returns {Array}
     */
    xor: function(...arrays){
        let map = {};
        for(let i in arrays){
            for(let j in arrays[i]){
                if(map[arrays[i][j]]) map[arrays[i][j]] ++;
                else map[arrays[i][j]] = 1;
            }
        }
        let ans = [];
        for(let key in map){
            if(map[key] == 1){
                ans[ans.length] = Number(key);
            }
        }
        return ans;
    },
    /**
     * 比较两个参数是否相等
     * @param {*} val1 
     * @param {*} val2 
     * @returns {Boolean}
     */
    eq: function(val1, val2){

        if(val1 !== val1 && val2 != val2){
            return true;
        }else{
            return val1 === val2;
        }
    },
    /**
     * value 是否小于other
     * @param {*} value 
     * @param {*} other 
     * @returns {Boolean}
     */
    lt: function(value, other){
        return value < other;
    },
    /**
     * value 是否小于等于other
     * @param {*} value 
     * @param {*} other 
     * @returns {Boolean}
     */
    lte: function(value, other){
        return value <= other;
    },
    /**
     * 返回一个object键值倒置后的对象
     * @param {Object} object 
     * @returns {Object}
     */
    invert: function(object){
        let ans = {};
        for(let i in object){
            ans[object[i]] = i;
        }
        return ans;
    },
    /**
     * 返回对象的键
     * @param {Object} object 
     * @returns {Object}
     */
    keys: function(object){
        let newObj = Object(object);
        let ans = [];
        for(let i in newObj){
            if(newObj.hasOwnProperty(i) == true)
                ans[ans.length] = i;
        }
        return ans;
    },
    /**
     * 整合多个对象
     * @param  {...Object} objects 
     * @returns {Object}
     */
    assign: function(...objects){
        let ans = {};
        for(let i in objects){
            for(let j in objects[i]){
                if(objects[i].hasOwnProperty(j) == true){
                    ans[j] = objects[i][j];
                } 
            }
        }
        return ans;
    },
    /**
     * 返回没有被选中的属性的整合对象
     * @param {Object} object 
     * @param {String/String[]} value
     * @returns {Object} 
     */
    omit: function(object, value){
        let ans  = {};
        let map = {};
        if(Array.isArray(value)){
            for(let i in value){
                map[value[i]] = true;
            }
        }else{
            map[value] = true;
        }
        for(let i in object){
            if(map[i]) continue;
            else ans[i] = object[i];
        }
        return ans;
    },
    /**
     * 返回被选中的属性的整合对象
     * @param {Object} object 
     * @param {String/String[]} value
     * @returns {Object} 
     */
    pick: function(object, value){
        let ans  = {};
        let map = {};
        if(Array.isArray(value)){
            for(let i in value){
                map[value[i]] = true;
            }
        }else{
            map[value] = true;
        }
        for(let i in object){
            if(map[i]) ans[i] = object[i];
        }
        return ans;
    },
    /**
     * 返回一个首字母大写，其余小写的字符串
     * @param {String} string
     * @returns {String} 
     */
    capitalize: function(string){
        let ans = '';
        if(string[0].charCodeAt() >= 97 && string[0].charCodeAt() <= 122){
            ans += String.fromCharCode(string[0].charCodeAt() - 32);
        }else
            ans += string[0];
        for(let i = 1; i < string.length; i ++){
            if(string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122)
                ans += string[i];
            else ans += String.fromCharCode(string[i].charCodeAt() + 32)
        }
        return ans;
    },
    /**
     * 检查字符串string是否以给定的target字符串结尾
     * @param {String} string 
     * @param {String} target 
     * @param {Number} position
     * @returns {Boolean} 
     */
    endsWith:function(string, target, position){
        if(position == null) position = string.length - target.length;
        else position = position - 1;
        for(let i = position, j = 0; i < string.length, j < target.length; i ++, j ++){
            if(string[i] != target[j]) return false;
        }
        return true;

    },
    /**
     * 返回两数的积
     * @param {Number} multiplier 
     * @param {Number} multiplicand 
     */
    multiply: function(multiplier,multiplicand){
        return multiplier * multiplicand;
    },
    /**
     * 返回对象的值
     * @param {Object} object 
     * @returns {Array}
     */
    values: function(object){
        let newObj = Object(object);
        let ans = [];
        for(let i in newObj){
            if(newObj.hasOwnProperty(i) == true)
                ans[ans.length] = newObj[i];
        }
        return ans;
    },
    /**
     * 
     * @param {Array} props 
     * @param {Array} values 
     */
    zipObject: function(props = [], values = []){
        let ans = {};
        for(let i = 0, j = 0; i < props.length, j < values.length; i ++, j ++){
            ans[props[i]] = values[j];
        }
        return ans;
    },
    /**
     * 从array中获得一个随机元素
     * @param {Array/Object} array 
     */
    sample: function(array){
        
        let r = Math.random();
        let index = Math.floor(r * array.length);
        console.log(index);
        return array[index];
    },
    /**
     * 从array中获得 n 个随机元素
     * @param {Array} array 
     * @param {Number} n 
     * @returns {Array}
     */
    sampleSize: function(array, n = 1){
        let ans = [];
        let flag = [];
        flag.length = array.length;
        flag.fill(false);
        if(n > array.length) n = array.length;

        while(ans.length < n){
            let r = Math.random();
            let index = Math.floor(r * array.length);
            if(!flag[index]){
                ans[ans.length] = array[index];
                flag[index] = true;
            }
        }
        return ans;
    },
    /**
     * 返回一个被打乱值的集合
     * @param {Array} array 
     * @returns {Array}
     */
    shuffle: function(array){
        let ans = [];
        let flag = [];
        flag.length = array.length;
        flag.fill(false);
        while(ans.length < array.length){
            let r = Math.random();
            let index = Math.floor(r * array.length);
            if(!flag[index]){
                ans[ans.length] = array[index];
                flag[index] = true;
            }
        }
        return ans;
    },
    /**
     * 检查 value是否在 collection中
     * @param {Object/Array/String} collection 
     * @param {*} value 
     * @param {Number} fromIndex
     * @returns {Boolean} 
     */
    includes: function(collection, value, fromIndex = 0){
        if(Array.isArray(collection)){
            if(fromIndex >= 0){
                for(let i = fromIndex; i < collection.length; i ++){
                    if(collection[i] == value) return true;
                }
            }else{
                for(let i = collection.length - 1; i >= collection.length - fromIndex; i --){
                    if(collection[i] == value) return true;
                }
            }

        }else if(Object.prototype.toString.call(collection) === '[object Object]'){
            for(let i in collection){
                if(collection[i] == value) return true;
            }
        }else{
            let re1 = new RegExp(value);
            
            return re1.test(collection);

        }
        return false;
    },
    /**
     * 从string字符串中移除前面和后面的 空格 或 指定的字符
     * @param {String} string 
     * @param {String} chars
     * @returns {String} 
     */
    trim: function(string, chars = " "){
        if(chars == null) chars = ' ';
        let ans = '';
        let left = 0, right = string.length - 1;
        let map = {};
        for(let i in chars){
            map[chars[i]] = true;
        }
        while(map[string[left]] && left < string.length){
            left ++;
        }
        while(map[string[right]] && right >= 0){
            right --;
        }
        for(let i = left; i <= right; i ++){
            ans += string[i];
        }
        return ans;
    },
    /**
     * 从string字符串中移后面的 空格 或 指定的字符
     * @param {String} string 
     * @param {String} chars
     * @returns {String} 
     */
    trimEnd: function(string, chars = " "){
        let ans = '';
        let left = 0, right = string.length - 1;
        let map = {};
        for(let i in chars){
            map[chars[i]] = true;
        }
        while(map[string[right]] && right >= 0){
            right --;
        }
        for(let i = left; i <= right; i ++){
            ans += string[i];
        }
        return ans;
    },
    /**
     * 从string字符串中移前面的 空格 或 指定的字符
     * @param {String} string 
     * @param {String} chars
     * @returns {String} 
     */
    trimStart: function(string, chars = " "){
        let ans = '';
        let left = 0, right = string.length - 1;
        let map = {};
        for(let i in chars){
            map[chars[i]] = true;
        }
        while(map[string[left]] && left < string.length){
            left ++;
        }
        for(let i = left; i <= right; i ++){
            ans += string[i];
        }
        return ans;
    },
    /**
     * 截断string字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."
     * @param {String} string 
     * @param {Object} positions 
     * @returns {String}
     */
    truncate: function(string, positions = {}){
        if(!positions['length']) positions['length'] = 30;
        if(!positions['omission']) positions['omission'] = '...';

        let ans = '';
        if(!positions['separator']){
            for(let i = 0; i < positions['length'] - positions['omission'].length; i ++){
                ans += string[i];
            }
            ans += positions['omission'];
        }else{
            let tmp = positions['separator'];
            let reStr = '';
            if(tmp[0] == '/' && tmp[tmp.length - 1] == '/'){
                for(let i = 1; i < tmp.length - 1; i ++){
                    reStr += tmp[i];
                }
            }else reStr = tmp;
            let reg = new RegExp(reStr, 'g');
            let start = 0;
            reg.lastIndex = 0;
            while(reg.lastIndex != null){
                let arr = reg.exec(string);
                if(arr == null) break;
                if(arr['index'] < positions['length']){
                    start = arr['index'];
                }else{
                    break;
                }
            }
            for(let i = 0; i < start; i ++){
                ans += string[i];
            }
            ans += positions['omission'];
        }

        return ans;
    },
    /**
     * 整合多个object，后面的不会覆盖前面的
     * @param {Object} object 
     * @param  {...Object} sources 
     */
    defaults:function(object, ...sources){
        let ans = {};
        for(let i in object){
            if(!ans[i]) ans[i] = object[i];
        }
        for(let i in sources){
            for(let j in sources[i]){
                if(!ans[j]) ans[j] = sources[i][j];
            }
        }
        return ans;
    },
    /**
     * 返回来自 object 的paths路径相应值的数组
     * @param {Object} object 
     * @param {String/String[]} paths
     * @returns {Array} 
     */
    at: function(object, paths){
        let ans = [];
        
        for(let i in paths){
            let arr = paths[i].split('.');
            let re1 = /(?<=\[)\d+(?=\])/;
            let tmp = object;
            for(let j in arr){
                if(re1.test(arr[j])){
                    let key = '';
                    for(let k in arr[j]){
                        if(arr[j][k] != '[') key += arr[j][k];
                        else  break;
                    }
                    let num = re1.exec(arr[j])[0];
                    tmp = tmp[key][Number(num)];
                }else{
                    tmp = tmp[arr[j]];
                }               
            }
            ans[ans.length] = tmp;            
        }
        return ans;
    },
    /**
     * 根据 object对象的path路径获取值。 如果value不存在会返回defaultValue;
     * @param {Object} object 
     * @param {Array/string} path 
     * @param {*} defaultValue 
     */
    get: function(object, path, defaultValue){
        let ans;
        let tmp = object;
        if(Array.isArray(path)){
            for(let i in path){
                if(tmp[path[i]]){
                    tmp = tmp[path[i]]
                }else return defaultValue;
            }
            return tmp;
        }else{
            let arr = path.split('.');
            let re1 = /(?<=\[)\d+(?=\])/g;
            let tmp = object;
            for(let j in arr){
                
                if(re1.test(arr[j])){
                    let key = '';
                    for(let k in arr[j]){
                        if(arr[j][k] != '[') key += arr[j][k];
                        else  break;
                    }
                    if(tmp[key])
                        tmp = tmp[key];
                    else return defaultValue;
                    re1.lastIndex = 0;
                    while(re1.lastIndex != null){
                        let num = re1.exec(arr[j]);
                        if(num == null) break;
                        console.log(num);
                        tmp = tmp[Number(num[0])];
                    }
                    
                }else{
                    if(tmp[arr[j]])
                        tmp = tmp[arr[j]];
                    else return defaultValue;
                }         
            }
            return tmp;
        }
    },
    /**
     * 检查object中是否包含path对应的属性，不包括继承属性
     * @param {Object} object 
     * @param {Array/String} path 
     * @returns {Boolean}
     */
    has: function(object, path){
        let tmp = object;
        if(Array.isArray(path)){
            for(let i in path){
                if(tmp.hasOwnProperty(path[i])){
                    tmp = tmp[path[i]];
                }else{
                    return false;
                }
            }
        }else{
            let arr = path.split('.');
            for(let i in arr){
                if(tmp.hasOwnProperty(arr[i])){
                    tmp = tmp[arr[i]];
                }else{
                    return false;
                }
            }
        }
        return true;
    },
    /**
     * 检查object中是否包含path对应的属性，包括继承属性
     * @param {Object} object 
     * @param {Array/String} path 
     * @returns {Boolean}
     */
    hasIn: function(object, path){
        let tmp = object;
        if(Array.isArray(path)){
            for(let i in path){
                if(tmp[path[i]]){
                    tmp = tmp[path[i]];
                }else{
                    return false;
                }
            }
        }else{
            let arr = path.split('.');
            for(let i in arr){
                if(tmp[arr[i]]){
                    tmp = tmp[arr[i]];
                }else{
                    return false;
                }
            }
        }
        return true;
    },
    /**
     * 转义string中的 "&", "<", ">" , '"' , "'" , 和 "`" 字符为HTML实体字符。
     * @param {String} string 
     * @returns {String}
     */
    escape: function(string){
        let map = {
            '&' : '&amp;',
            '<' : '&lt;',
            '>' : '&gt;',
            '"' : '&quot;',
            "'" : '&apos;',
            '`' : '&grave;'
        }
        let ans = '';
        for(let i = 0; i < string.length; i ++){
            if(map[string[i]]){
                ans += map[string[i]];
            }else ans += string[i];
        }
        return ans;
    },
    /**
     * 转换string字符串为指定基数的整数。
     * @param {String} string 
     * @param {Number} radix 
     * @returns {Number}
     */
    parseInt: function(string, radix = 10){
        let ans = 0;
        if(radix == 0) radix = 10;
        let map = {
            'A' : 10,
            'B' : 11,
            'C' : 12,
            'D' : 13,
            'E' : 14,
            'F' : 15
        }
        for(let i = 0; i < string.length; i ++){
            ans *= radix;
            if(map[string[i]]) ans += map[string[i]];
            else ans += Number(string[i]);
        }
        return ans;
    },
    /**
     * 根据separator 拆分字符串string
     * @param {String} string 
     * @param {String} separator 
     * @param {Number} limit 
     * @returns {Array}
     */
    split: function(string = '', separator, limit = Infinity){
        let re1 = new RegExp(separator, 'g');
        re1.lastIndex = 0;
        let ans = [];
        let start = 0;
        while(re1.lastIndex != null){
            let arr = re1.exec(string);
            if(arr == null) break
            let end = arr['index'];
            let tmp = '';
            for(let i = start; i < end; i ++){
                tmp += string[i];
            }
            ans[ans.length] = tmp;
            start = end + 1;
            if(ans.length >= limit) break;
        }
        if(start < string.length && ans.length < limit){
            let tmp = '';
            for(let i = start; i < string.length; i ++){
                tmp += string[i];
            }
            ans[ans.length] = tmp;
        }
        return ans;
    },
    /**
     * 检查字符串string是否以 target 开头
     * @param {String} string 
     * @param {String} target 
     * @param {Number} position 
     * @returns {Boolean}
     */
    startsWith: function(string, target, position = 0){
        let start = 0;
        for(let i = position, j = 0; i < string.length, j < target.length; i ++, j ++){
            if(string[i] != target[j]) return false;
        }

        if(string.length - position >= target.length)
            return true;
        else return false;
    },
    replace: function(string, pattern, replacement){
        let reg = new RegExp(pattern, 'g');
        
        let ans = '';
        reg.lastIndex = 0;
        let start = 0;
        while(reg.lastIndex != null){
            let arr = reg.exec(string);
            if(arr == null) break;
            let end = arr['index'];
            for(let i = start; i < end; i ++){
                ans += string[i];
            }
            ans += replacement;
            start = end + pattern.length;
        }
        if(start < string.length){
            for(let i = start; i < string.length; i ++){
                ans += string[i];
            }
        }

        return ans;
    },
    /**
     * 转换字符串string以空格分开单词，并转换为小写;
     * @param {String} string 
     * @returns {String}
     */
    lowerCase: function(string){
        let ans = '';
        let point = 0;
        while(point < string.length && !((string[point].charCodeAt() >= 65 && string[point].charCodeAt() <= 90) ||  (string[point].charCodeAt() >= 97 && string[point].charCodeAt() <= 122))){
            point ++;
        }
        while(point < string.length){
            if(string[point].charCodeAt() >= 97 && string[point].charCodeAt() <= 122){
                ans += string[point];
                point ++;
            }else if(string[point].charCodeAt() >= 65 && string[point].charCodeAt() <= 90){
                if(point != 0 && string[point - 1].charCodeAt() >= 97 && string[point - 1].charCodeAt() <= 122){
                    ans += ' ';
                }
                ans += String.fromCharCode(string[point].charCodeAt() + 32);
                point ++;
            }else{               
                while(point < string.length && !((string[point].charCodeAt() >= 65 && string[point].charCodeAt() <=90) ||  (string[point].charCodeAt() >= 97 && string[point].charCodeAt() <= 122))){
                    point ++;
                }
                if(point < string.length) ans += ' ';
            }
        }
        return ans;
    },
    /**
     * 转换字符串string为 驼峰写法
     * @param {String} string 
     * @returns {String}
     */
    camelCase: function(string){
        let lowStr = this.lowerCase(string);
        let ans = '';
        let point = 0;
        while(lowStr[point] != ' '){
            ans += lowStr[point];
            point ++;
        }
        let flag = true;
        while(point < lowStr.length){
            if(lowStr[point] == ' ') {
                flag = true;
            }else{
                if(flag){
                    ans += String.fromCharCode(lowStr[point].charCodeAt() -32);
                    flag = false;
                }else{
                    ans += lowStr[point];
                }
            }
            point ++;            
        }
        return ans;
    },
    /**
     * 转换字符串string为 kebab case
     * @param {String} string 
     * @returns {String}
     */
    kebabCase: function(string){
        let lowStr = this.lowerCase(string);
        let ans = '';
        for(let i = 0; i < lowStr.length; i ++){
            if(lowStr[i] == ' ') ans += '-';
            else ans += lowStr[i];
        }
        return ans;
    },
    /**
     * 转换字符串string为 snake case
     * @param {String} string 
     * @returns {String}
     */
    snakeCase: function(string){
        let lowStr = this.lowerCase(string);
        let ans = '';
        for(let i = 0; i < lowStr.length; i ++){
            if(lowStr[i] == ' ') ans += '_';
            else ans += lowStr[i];
        }
        return ans;
    },
    /**
     * 转换字符串string为 start case
     * @param {String} string 
     * @returns {String}
     */
    startCase: function(string){
        let ans = '';
        let point = 0;
        while(point < string.length && !((string[point].charCodeAt() >= 65 && string[point].charCodeAt() <= 90) ||  (string[point].charCodeAt() >= 97 && string[point].charCodeAt() <= 122))){
            point ++;
        }
        while(point < string.length){
            if(string[point].charCodeAt() >= 97 && string[point].charCodeAt() <= 122){
                if(ans == '' || ans[ans.length - 1] == ' ') ans += String.fromCharCode(string[point].charCodeAt() - 32);
                else ans += string[point];
                point ++;
            }else if(string[point].charCodeAt() >= 65 && string[point].charCodeAt() <= 90){
                if(point != 0 && string[point - 1].charCodeAt() >= 97 && string[point - 1].charCodeAt() <= 122){
                    ans += ' ';
                }
                ans += string[point];
                point ++;
            }else{               
                while(point < string.length && !((string[point].charCodeAt() >= 65 && string[point].charCodeAt() <=90) ||  (string[point].charCodeAt() >= 97 && string[point].charCodeAt() <= 122))){
                    point ++;
                }
                if(point < string.length) ans += ' ';
            }
        }
        return ans;
    },
    /**
     * 设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象
     * @param {Object} object 
     * @param {Array/String} value 
     * @param {*} newVal 
     * @returns {Object}
     */
    set: function(object, value, newVal){
        let tmp = object;
        if(!Array.isArray(value)){
            let arr = value.split('.');
            let newArr = [];
            let reg = /(?<=\[)\d+(?=\])/g;
            for(let i in arr){
                if(reg.test(arr[i])){
                    let key = '';
                    for(let j = 0; j < arr[i].length; j ++){
                        if(arr[i][j] != '['){ 
                            key += arr[i][j];
                        }else break;
                    }
                    newArr[newArr.length] = key;
                    reg.lastIndex = 0;
                    while(reg.lastIndex != null){
                        let tmp = reg.exec(arr[i]);
                        if(tmp == null) break;
                        newArr[newArr.length] = tmp[0];
                    }
                }else{
                    newArr[newArr.length] = arr[i];
                }
            }
            value = [];
            for(let i in newArr){
                value[i] = newArr[i];
            }
        }
        for(let i = 0 ; i < value.length - 1; i ++){
            if(object[value[i]]) object = object[value[i]];
            else{
                if(Number(value[i]) >= 0 && Number(value[i]) <= 9){
                    if(Number(value[i + 1]) >= 0 && Number(value[i + 1]) <= 9){
                        object[Number(value[i])] = [];
                    }else object[Number(value[i])] = {};
                    object = object[Number(value[i])];
                }else{
                    if(Number(value[i + 1]) >= 0 && Number(value[i + 1]) <= 9){
                        object[value[i]] = [];
                    }else object[value[i]] = {};
                    object = object[value[i]];
                }             
                
            }
            
        }
        if(newVal == null){
            delete object[value[value.length - 1]];
        }else if(this.isFunction(newVal)){
            object[value[value.length - 1]] = newVal(object[value[value.length - 1]]);
        }
        else object[value[value.length - 1]] = newVal;
        return tmp;
      
    },
    /**
     * 这个方法返回首个提供的参数
     * @param  {...any} values 
     * @returns {*}
     */
    identity: function(...values){
        return values[0];
    },
    find: function(collection, predicate = this.identity, fromIndex = 0){

        if(Object.prototype.toString.call(predicate) == '[object Function]'){
            for(let i in collection){
                if(predicate(collection[i])) return collection[i];
            }
            return undefined;
        }else if(Object.prototype.toString.call(predicate) == '[object Object]'){
            for(let i in collection){
                let flag = true;
                for(let j in predicate){
                    if(predicate[j] != collection[i][j]) flag = false;
                }
                if(flag) return collection[i];
            }
            return undefined;
        }else if(Object.prototype.toString.call(predicate) == '[object String]'){
            for(let i in collection){
                if(collection[i][predicate]) return collection[i];
            }
            return undefined;
        }else{
            for(let i in collection){
                if(collection[i][predicate[0]] == predicate[1]) return collection[i];
            }
            return undefined;
        }
        
    },
    /**
     * 该方法返回第一个通过 predicate 判断为真值的元素的索引值
     * @param {Array} array 
     * @param {Array|Function|Object|string} predicate 
     * @param {Number} fromIndex 
     * @returns {Number}
     */
    findIndex: function(array, predicate = this.identity,fromIndex = 0){
        if(Object.prototype.toString.call(predicate) == '[object Function]'){
            for(let i = fromIndex; i < array.length; i ++){
                if(predicate(array[i])) return i;
            }
        }else if(Object.prototype.toString.call(predicate) == '[object Object]'){
            for(let i = fromIndex; i < array.length; i ++){
                let flag = true;
                for(let j in predicate){
                    if(predicate[j] != array[i][j]) flag = false;
                }
                if(flag) return i;
            }

        }else if(Object.prototype.toString.call(predicate) == '[object String]'){
            for(let i = fromIndex; i < array.length; i ++){
                if(array[i][predicate]) return i;
            }

        }else{
            for(let i = fromIndex; i < array.length; i ++){
                if(array[i][predicate[0]] == predicate[1]) return i;
            }
        }
        return -1;
    },
    /**
     * 该方法返回倒数第一个通过 predicate 判断为真值的元素的索引值
     * @param {Array} array 
     * @param {Array|Function|Object|string} predicate 
     * @param {Number} fromIndex 
     * @returns {Number}
     */
    findLastIndex: function(array, predicate = this.identity,fromIndex = array.length - 1){
        if(Object.prototype.toString.call(predicate) == '[object Function]'){
            for(let i = fromIndex; i >= 0; i --){
                if(predicate(array[i])) return i;
            }
        }else if(Object.prototype.toString.call(predicate) == '[object Object]'){
            for(let i = fromIndex; i >= 0; i --){
                let flag = true;
                for(let j in predicate){
                    if(predicate[j] != array[i][j]) flag = false;
                }
                if(flag) return i;
            }

        }else if(Object.prototype.toString.call(predicate) == '[object String]'){
            for(let i = fromIndex; i >= 0; i --){
                if(array[i][predicate]) return i;
            }

        }else{
            for(let i = fromIndex; i >= 0; i --){
                if(array[i][predicate[0]] == predicate[1]) return i;
            }
        }
        return -1;
    },
    /**
     * 根据 depth 递归减少 array 的嵌套层级
     * @param {Array} array 
     * @param {Number} depth 
     * @returns {Array}
     */
    flattenDepth: function(array, depth = 1){
        let ans = array;
        for(let i = 0; i < depth; i ++){
            ans = this.flatten(ans);
        }
        return ans;
    },
    /**
     * 返回一个由键值对pairs构成的对象
     * @param {Array} pairs 
     * @returns {Object}
     */
    fromPairs: function(pairs){
        let ans = {};
        for(let i in pairs){
            ans[pairs[i][0]] = pairs[i][1];
        }
        return ans;
    },
    /**
     * 通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值
     * @param {Array/Object} collection 
     * @param {Array|Function|Object|string} predicate
     * @returns {Boolean} 
     */
    every: function(collection, predicate = this.identity){
        if(Object.prototype.toString.call(predicate) == '[object Function]'){
            for(let i = 0; i < collection.length; i ++){
                if(!predicate(collection[i])) return false;
            }
        }else if(Object.prototype.toString.call(predicate) == '[object Object]'){
            for(let i = 0; i < collection.length; i ++){
                for(let j in predicate){
                    if(predicate[j] != collection[i][j]) return false;
                }
            }

        }else if(Object.prototype.toString.call(predicate) == '[object String]'){
            for(let i = 0; i < collection.length; i ++){
                if(!collection[i][predicate]) return false;
            }

        }else{
            for(let i = 0; i < collection.length; i ++){
                if(collection[i][predicate[0]] != predicate[1]) return false;
            }
        }
        return true;
    },
    /**
     * predicate（断言函数）返回真值 的所有元素的数组
     * @param {Array/Object} collection 
     * @param {Array|Function|Object|string} predicate
     * @returns {Array} 
     */
    filter: function(collection, predicate = this.identity){
        let ans = [];
        if(Object.prototype.toString.call(predicate) == '[object Function]'){
            for(let i = 0; i < collection.length; i ++){
                if(predicate(collection[i])) ans.push(collection[i]);
            }
        }else if(Object.prototype.toString.call(predicate) == '[object Object]'){
            for(let i = 0; i < collection.length; i ++){
                let flag = true
                for(let j in predicate){
                    if(predicate[j] != collection[i][j]) flag = false;
                }
                if(flag) ans.push(collection[i]);
            }

        }else if(Object.prototype.toString.call(predicate) == '[object String]'){
            for(let i = 0; i < collection.length; i ++){
                if(collection[i][predicate]) ans.push(collection[i]);
            }

        }else{
            for(let i = 0; i < collection.length; i ++){
                if(collection[i][predicate[0]] == predicate[1]) ans.push(collection[i]);
            }
        }
        return ans;
    },
    /**
     * 右至左遍历collection （集合）元素,返回第一个复合断言的元素
     * @param {Array/Object} collection 
     * @param {Array/Function/Object/string} predicate 
     * @param {Number} fromIndex 
     */
    findLast: function(collection, predicate = this.identity, fromIndex = collection.length - 1){

        if(Object.prototype.toString.call(predicate) == '[object Function]'){
            for(let i = fromIndex; i >= 0; i --){
                if(predicate(collection[i])) return collection[i];
            }
        }else if(Object.prototype.toString.call(predicate) == '[object Object]'){
            for(let i = fromIndex; i >= 0; i --){
                let flag = true;
                for(let j in predicate){
                    if(predicate[j] != collection[i][j]) flag = false;
                }
                if(flag) return collection[i];
            }
        }else if(Object.prototype.toString.call(predicate) == '[object String]'){
            for(let i = fromIndex; i >= 0; i --){
                if(collection[i][predicate]) return collection[i];
            }
        }else{
            for(let i = fromIndex; i >= 0; i --){
                if(collection[i][predicate[0]] == predicate[1]) return collection[i];
            }
        }
        return undefined;
        
    },
    /**
     * 右至左遍历collection （集合）元素,返回是否有断言为真的元素
     * @param {Array/Object} collection 
     * @param {Array/Function/Object/string} predicate 
     */
    some: function(collection, predicate = this.identity){

        if(Object.prototype.toString.call(predicate) == '[object Function]'){
            for(let i = 0; i < collection.length; i ++){
                if(predicate(collection[i])) return true;
            }
        }else if(Object.prototype.toString.call(predicate) == '[object Object]'){
            for(let i = 0; i < collection.length; i ++){
                let flag = true;
                for(let j in predicate){
                    if(predicate[j] != collection[i][j]) flag = false;
                }
                if(flag) return true;
            }
        }else if(Object.prototype.toString.call(predicate) == '[object String]'){
            for(let i = 0; i < collection.length; i ++){
                if(collection[i][predicate]) return true;
            }
        }else{
            for(let i = 0; i < collection.length; i ++){
                if(collection[i][predicate[0]] == predicate[1]) return true;
            }
        }
        return false;
        
    },
    /**
     * 检查 predicate 是否是各种类型。
     * @param {*}} predicate 
     * @returns {Boolean}
     */
    isFunction: function(value){
        return Object.prototype.toString.call(value) == '[object Function]'
    },
    isArray: function(value){
        return Object.prototype.toString.call(value) == '[object Array]'
    },
    isBoolean: function(value){
        return Object.prototype.toString.call(value) == '[object Boolean]' 
    },
    isRegExp: function(value){
        return Object.prototype.toString.call(value) == '[object RegExp]'
    },
    isNumber: function(value){
        return Object.prototype.toString.call(value) == '[object Number]'
    },
    isObject: function(value){
        if(value == null) return false;

        return typeof(value) == 'object' || typeof(value) == 'function';
    },
    isDate: function(value){
        return Object.prototype.toString.call(value) == '[object Date]';
    },
    isFinite: function(value){
        let min = Number.MIN_VALUE;
        let max = Number.MAX_VALUE
        if(this.isNumber(value) && value <= max && value >= min) return true;
        else return false;
    },
    isNil: function(value){
        if(value === null || value === undefined) return true;
        else return false;
    },
    isString: function(value){
        return Object.prototype.toString.call(value) == '[object String]';
    },
    isInteger: function(value){
        if(this.isNull(value)) return false;
        if(this.isNumber(value) && this.floor(value) == value) return true;
        else return false;
    },
    isArrayBuffer: function(value){
        return Object.prototype.toString.call(value) == '[object ArrayBuffer]';
    },
    isArrayLike: function(value){
        if(!this.isFunction(value) && value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER) return true;
        else return false;
    },
    isArrayLikeObject: function(value){
        if(this.isArrayLike(value) && this.isObject(value)) return true;
        else return false;
    },
    isArguments: function(value){
        return this.isObjectLike(value) && Object.prototype.toString.call(value) ==  '[object Arguments]';
    },
    isObjectLike: function(value){
        return value != null && typeof(value) ==  "object" ;  
    },
    pretreatIteratee: function(iteratee){
        if(Object.prototype.toString.call(iteratee) == '[object Function]'){
            return iteratee;
        }
        if(Object.prototype.toString.call(iteratee) == '[object String]'){
            return function(object){
                return nonmit.get(object, iteratee);
            }
        }
        if(Object.prototype.toString.call(iteratee) == '[object Array]'){
            return function(object){
                return object[iteratee[0]] == iteratee[1];
            }
        }
        if(Object.prototype.toString.call(iteratee) == '[object Object]'){
            return function(object){
                for(let i in iteratee){
                    if(object[i] != iteratee[i])
                        return false;
                }
                return true;
            }
        }
    },
    differenceBy: function(array, ...args){
        let pre;
        if(Object.prototype.toString.call(args[args.length - 1]) == '[object Array]'){
            return this.difference(array, ...args);
        }else 
            pre = this.pretreatIteratee(args[args.length - 1]);

        let map = {};
        let ans = [];
        for(let i = 0; i < array.length; i ++){
            map[pre(array[i])] = true;
        }
        for(let i = 0; i < args.length - 1; i ++){
            for(let j in args[i]){
                map[pre(args[i][j])] = false;
            }
        }
        for(let i in array){
            if(map[pre(array[i])]){
                ans.push(array[i]);
            }
        }
        return ans;
    },
    differenceWith: function(array, ...args){
        let pre = args[args.length - 1];
        let ans = [];       
        for(let k = 0; k < array.length; k ++){
            let flag = false;
            for(let i = 0; i < args.length - 1; i ++){
                for(let j = 0; j < args[i].length; j ++){
                    if(pre(args[i][j], array[k])){
                        flag = true;
                        break;
                    }
                }
                if(flag) break;
                else ans.push(array[k]);
            }
        }
        return ans;
    },
    dropRightWhile: function(array, predicate = this.identity){
        let ans = [];
        let pre = this.pretreatIteratee(predicate);

        let right = array.length - 1;
        while(pre(array[right])){
            right --;
        }
        for(let i = 0; i <= right; i ++){
            ans.push(array[i]);
        }
        return ans;
    },
    dropWhile: function(array, predicate = this.identity){
        let ans = [];
        let pre = this.pretreatIteratee(predicate);

        let left = 0;
        while(pre(array[left])){
            left ++;
        }
        for(let i = left; i < array.length; i ++){
            ans.push(array[i]);
        }
        return ans;
    },
    pullAllBy: function(array, value, iteratee = this.identity){
        
        let pre = this.pretreatIteratee(iteratee);

        let ans  = [];
        for(let i = 0; i < array.length; i ++){
            let flag = true;
            for(let j = 0; j < value.length; j ++){
                if(pre(array[i]) == pre(value[j])){
                    flag = false;
                    break;
                }
            }
            if(flag) ans.push(array[i]);
        }
        return ans;
    },
    pullAllWith: function(array, value, comparator){

        let ans = [];
        for(let i in array){
            let flag = true;
            for(let j in value){
                if(comparator(array[i], value[j])){
                    flag = false;
                    break;
                }
            }
            if(flag) ans.push(array[i]);
        }
        return ans;
    },
    sortedIndexBy: function(array, value, iteratee = this.identity){

        let pre = this.pretreatIteratee(iteratee);

        let preVal = pre(value);

        return this.sortedIndex(array, preVal);
    },
    sortedLastIndex: function(array, value){
        let low = 0, high = array.length - 1;
        if(value > array[high]) return array.length;
        while(low < high){
            let mid = Math.floor((low + high) / 2);
            if(array[mid] < value) low = mid + 1;
            else high = mid;
        }
        let ans = low + 1;
        while(array[low] == array[ans]){
            ans ++;
        }
        return ans;
    },
    sortedLastIndexBy:  function(array, value, iteratee = this.identity){
        let pre = this.pretreatIteratee(iteratee);
        
        val = pre(value);

        return this.sortedLastIndex(array, val);
    },
    sortedLastIndexOf: function(array, value){

        return this.sortedLastIndex(array, value) - 1;
    },
    sortedUniq: function(array){
        let ans = [];
        ans.push(array[0]);
        for(let i = 1; i < array.length; i ++){
            if(array[i] != array[i - 1]){
                ans.push(array[i]);
            }
        }
        return ans;
    },
    sortedUniqBy: function(array, iteratee){
        let map = {};
        let ans = [];
        for(let i in array){
            if(!map[iteratee(array[i])]){
                ans.push(array[i]);
                map[iteratee(array[i])] = true;
            }
        }
        return ans;
    },
    takeRightWhile: function(array, predicate = this.identity){

        let pre = this.pretreatIteratee(predicate);

        let index = array.length - 1;
        while(pre(array[index])){
            index --;
        }
        
        return array.slice(index + 1, array.length);

    },
    takeWhile: function(array, predicate = this.identity){
        let pre = this.pretreatIteratee(predicate);

        let index = 0;
        while(pre(array[index])){
            index ++;
        }
        return array.slice(0, index);
    },
    unionBy: function(...arrays){
        let pre = this.pretreatIteratee(arrays[arrays.length - 1]);

        let ans = [];
        let map = {};
        for(let i = 0; i < arrays.length - 1; i ++){
            for(let j in arrays[i]){
                if(!map[pre(arrays[i][j])]){
                    ans.push(arrays[i][j]);
                    map[pre(arrays[i][j])] = true;
                }
            }
        }
        return ans;

    },
    unionWith: function(...arrays){

        let predicate = arrays[arrays.length - 1];

        let ans = [];
        for(let i = 0; i < arrays.length - 1; i ++){
            for(let j = 0; j < arrays[i].length; j ++){
                let flag = true;
                for(let k in ans){
                    if(predicate(ans[k], arrays[i][j])){
                        flag = false;
                        break;
                    }
                }
                if(flag) ans.push(arrays[i][j]);
            }
        }
        return ans;
    },
    uniqBy: function(array, iteratee = this.identity){
        let pre = this.pretreatIteratee(iteratee);
        let map = {};
        let ans = [];
        for(let i in array){
            if(!map[pre(array[i])]){
                ans.push(array[i]);
                map[pre(array[i])] = true;
            }
        }
        return ans;
    },
    uniqWith: function(array, comparator){
        let ans = [];
        
        for(let i in array){
            let flag = true
            for(let j in ans){
                if(comparator(array[i], ans[j])){
                    flag = false;
                    break;
                }
            }
            if(flag) ans.push(array[i]);
        }
        return ans;
    },
    unzipWith: function(...array){

        let pre = array[array.length - 1];
        let zipArr = array.slice(0, array.length - 1);

        zipArr = this.flatten(zipArr);
        
        let unzipArr = this.unzip(zipArr);

        let ans = [];
        let cnt = 0;
        for(let i = 0; i < unzipArr.length; i ++){
            let tmp = unzipArr[i][0];
            for(let j = 1; j < unzipArr[i].length; j ++){
                tmp = pre(tmp, unzipArr[i][j]);
            }
            ans.push(tmp);
        }
        return ans;
    },
    xorBy: function(...arrays){

        let pre = this.pretreatIteratee(arrays[arrays.length - 1]);

        let map = {};
        
        for(let i = 0; i < arrays.length - 1; i ++){
            for(let j in arrays[i]){
                if(map[pre(arrays[i][j])]){
                    map[pre(arrays[i][j])] ++;
                }else{
                    map[pre(arrays[i][j])] = 1;
                }
            }
        }
        let ans = [];
        for(let i = 0; i < arrays.length - 1; i ++){
            for(let j in arrays[i]){
                if(map[pre(arrays[i][j])] == 1){
                    ans.push(arrays[i][j]);
                }
            }
        }
        return ans;

    },
    intersectionBy: function(...arrays){

        let newArr = arrays[0];
        let pre = this.pretreatIteratee(arrays[arrays.length - 1]);
        
        for(let i = 1; i < arrays.length - 1; i ++){

            newArr = getSameBy(newArr, arrays[i]);
        }

        function getSameBy(firstArr, arr){
            let ans = [];
            let map = {};
            for(let i = 0; i < arr.length; i ++){
                map[pre(arr[i])] = 1;
            }
            for(let i in firstArr){
                if(map[pre(firstArr[i])]){
                    ans.push(firstArr[i]);
                    map[pre(firstArr[i])] --;
                }
            }
            return ans;
        }

        return newArr;
    },
    intersectionWith: function(...arrays){
        let comparator = arrays[arrays.length - 1];

        let newArr = arrays[0]
        for(let i = 1; i < arrays.length - 1; i ++){
            newArr = getSameWith(newArr, arrays[i]);
        }
        function getSameWith(firstArr, arr){

            let ans = [];
            for(let i = 0; i < firstArr.length; i ++){
                for(let j in arr){
                    if(comparator(firstArr[i], arr[j])){
                        ans.push(firstArr[i]);
                    }
                }
            }
            return ans;
        }
        return newArr;
    },
    xorWith: function(...arrays){
        let comparator = arrays[arrays.length - 1];

        let newArr = arrays[0];
        for(let i = 1; i < arrays.length - 1; i ++){
            newArr = getXor(newArr, arrays[i]);
        }

        function getXor(firstArr, arr){
            let ans = [];
            for(let i = 0; i < firstArr.length; i ++){
                let flag = true;
                for(let j in arr){
                    if(comparator(firstArr[i], arr[j])){
                        flag = false;
                        break;
                    }
                }
                if(flag) ans.push(firstArr[i]);
            }
            return ans;
        }
        return newArr;
    },
    zipObjectDeep: function(props = [], values = []){

        let ans = {};
        for(let i in props){
            this.set(ans, props[i], values[i]);
        }
        return ans;
    },
    zipWith: function(...arrays){
        let pre = arrays[arrays.length - 1];
        let unzipArr = arrays.slice(0, arrays.length - 1);

        let zipArr = this.zip(...unzipArr);
        
        let ans = [];
        for(let i = 0; i < zipArr.length; i ++){
            ans[i] = pre(...zipArr[i]);
        }
        return ans;
    },
    countBy: function(collection, iteratee = this.identity){
        let map = {};
        let pre = this.pretreatIteratee(iteratee);
        for(let i in collection){
            if(map[pre(collection[i])]){
                map[pre(collection[i])] ++;    
            }else{
                map[pre(collection[i])] = 1;
            }
        }
        return map;
    },
    forEach: function(collection, iteratee = this.identity){
         if(Array.isArray(collection)){
             for(let i in collection){
                 iteratee(collection[i]);
             }
         }else{
             for(let key in collection){
                 iteratee(collection[key], key);
             }
         }
         return  collection;
    },
    forEachRight: function(collection, iteratee = this.identity){
        if(Array.isArray(collection)){
            for(let i = collection.length - 1; i >= 0; i --){
                iteratee(collection[i]);
            }
        }else{
            let key = [];
            let value = [];
            for(let i in collection){
                key.push(i);
                value.push(collection[i]);
            }
            for(let i = key.length; i >= 0; i --){
                iteratee(value[i], key[i]);
            }
        }
        return collection;
   },
    groupBy: function(collection, iteratee = this.identity){
        let map = {};
        let pre = this.pretreatIteratee(iteratee);
        for(let i in collection){
            if(!map[pre(collection[i])]){
            map[pre(collection[i])] = [];
            }
            map[pre(collection[i])].push(collection[i]);
        }

        return map;
    },
    keyBy: function(collection, iteratee = this.identity){
        let pre = this.pretreatIteratee(iteratee);

        let map = {};
        for(let i in collection){
            map[pre(collection[i])] = collection[i];
        }
        return map;
        },
    map: function(collection, iteratee = this.identity){
        let pre = this.pretreatIteratee(iteratee);
        let ans = [];
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i ++){
                ans.push(pre(collection[i], i, collection));
            }
        }else{
            for(let i in collection){
                ans.push(pre(collection[i], i, collection));
            }
        }

        return ans;
    },
    partition: function(collection, predicate = this.identity){
        let pre = this.pretreatIteratee(predicate);

        let ans = [];
        ans[0] = [];
        ans[1] = [];
        for(let i in collection){
            if(pre(collection[i])){
                ans[0].push(collection[i]);
            }else{
                ans[1].push(collection[i]);
            }
        }
        return ans;
    },
    reduce: function(collection, iteratee = this.identity, accumulator){
        
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i ++){
                if(accumulator == null) {
                    accumulator = collection[i];
                    continue;
                }
                accumulator =  iteratee(accumulator, collection[i]);
            }
        }else{
            for(let i in collection){
                if(accumulator == null){
                    accumulator = {i : collection[i]};
                }else {
                    accumulator = iteratee(accumulator, collection[i], i);
                }
            }

        }

        return accumulator;
    },
    reduceRight: function(collection, iteratee = this.identity, accumulator){
        
        if(Array.isArray(collection)){
            for(let i = collection.length - 1; i >= 0; i --){
                if(accumulator == null) {
                    accumulator = collection[i];
                    continue;
                }
               accumulator =  iteratee(accumulator, collection[i]);
            }
        }else{
            let value = [];
            let key = [];
            for(let i in collection){
                value.push(collection[i]);
                key.push(i);
            }
            for(let i = value.length - 1; i >= 0; i --){
                if(accumulator == null){
                    accumulator = {};
                }
                accumulator = iteratee(accumulator, value[i], key[i]);
            }

        }
        return accumulator;
    },
    reject: function(collection, predicate = this.identity){
        let pre = this.pretreatIteratee(predicate);

        let ans = [];
        for(let i in collection){
            if(!pre(collection[i]))
                ans.push(collection[i]);
        }
        return ans;
    },
    toArray: function(value){
        let ans = [];
        for(let i in value){
            ans.push(value[i]);
        }
        return ans;
    },
    toFinite: function(value){
        if(this.isFinite(Number(value))) return Number(value);
        else return Number(value) > Number.MAX_VALUE ? Number.MAX_VALUE : Number.MIN_VALUE;
    },
    toInteger: function(value){
        
        value = this.toFinite(value);
        return this.floor(value);
    },
    toLength: function(value){
        value = this.toFinite(value);
        if(value > 0xFFFFFFFF) return 0xFFFFFFFF;
        else return this.floor(value);
    },
    toNumber: function(value){

        return value == null ? null : Number(value);
    },
    toSafeInteger: function(value){
        value = this.toFinite(value);

        if(value > Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
        if(value < Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;
        return value == null ? null : this.floor(value);
    },
    flatMap: function(collection, iteratee = this.identity){
        let pre = this.pretreatIteratee(iteratee);

        let ans = [];
        for(let i in collection){
            ans.push(pre(collection[i]));
            ans = this.flatten(ans);
        }

        return ans;
    },
    flatMapDeep: function(collection, iteratee = this.identity){
        let pre = this.pretreatIteratee(iteratee);

        let ans = [];
        for(let i in collection){
            ans.push(pre(collection[i]));
            ans = this.flattenDeep(ans);
        }
        return ans;
    },
    flatMapDepth: function(collection, iteratee = this.identity, depth = 1){
        let pre = this.pretreatIteratee(iteratee);

        let ans = [];
        for(let i in collection){
            ans.push(pre(collection[i]));         
        }
        ans = this.flattenDepth(ans, depth);
        return ans;
    },
    invokeMap: function(collection, path, ...args){

        let ans = [];
        if(typeof(path) == 'string'){
            var pre = nonmit[path];
            
            for(let i in collection){
                ans.push(pre(collection[i]));
            }
        }if(typeof(path) == 'function'){
            for(let i in collection){
                ans.push(path.call(collection[i], ...args))
            }
        }
        return ans;

    },
    sort: function(array){
        
        return array.sort(function(a, b){return a - b});
    },
    orderBy: function(collection, iteratee = this.identity, orders){

        for(let i = iteratee.length - 1; i >= 0; i --){
            if(typeof(iteratee[i]) == 'string'){
                if(orders[i] == 'desc')
                    collection = sortArray(collection, iteratee[i], false)
                else collection = sortArray(collection, iteratee[i], true);  
            }else{
                if(typeof(iteratee[i]) == 'function'){
                    if(orders[i] == 'desc')
                        collection = sortArray(collection, !iteratee[i])
                    else collection = sortArray(collection, iteratee[i]);  
                }
            } 
        }
        function sortArray(array, str, order){

            if(order)
                array.sort(cmp);
            else array. sort(cmp2);
            function cmp(a, b){
                if(a[str] < b[str]) return -1;
                if(a[str] > b[str]) return 1;
                return 0;
            }
            function cmp2(a, b){
                if(a[str] > b[str]) return -1;
                if(a[str] < b[str]) return 1;
                return 0;
            }
            return array;

        }
        return collection;
        
    },
    castArray: function(...value){
        if(value.length == 0) return [];
        if(Array.isArray(value)) return value;
        else return [value];
    },
    maxBy: function(array, iteratee = this.identity){
        let pre = this.pretreatIteratee(iteratee);
        let max = array[0];
        for(let i = 1; i < array.length; i ++){
            if(pre(max) < pre(array[i])) max = array[i];
        }
        return max;
    },
    meanBy: function(array, iteratee = this.identity){
        let pre = this.pretreatIteratee(iteratee);
        let sum = 0;
        for(let i = 0; i < array.length; i ++){
            sum += pre(array[i]);
        }
        return sum / array.length;
    },
    sumBy: function(array, iteratee = this.identity){
        let pre = this.pretreatIteratee(iteratee);
        let sum = 0;
        for(let i = 0; i < array.length; i ++){
            sum += pre(array[i]);
        }
        return sum;
    },
    clamp: function(number, lower, upper){
        if(number > upper) return upper;
        if(number < lower) return lower;
        return number;
    },
    inRange: function(...nums){
        if(nums.length == 3){
            let start = nums[1] < nums[2] ? nums[1] : nums[2]; 
            let end = nums[1] < nums[2] ? nums[2] : nums[1];
            if(nums[0] >= start && nums[0] < end) return true;
            else return false;
        }
        if(nums.length == 2){
            let start = nums[1] < 0 ? nums[1] : 0; 
            let end = nums[1] < 0 ? 0 : nums[1];
            if(nums[0] >= start && nums[0] < end) return true;
            else return false;
        }
    },
    random: function(lower = 0, upper = 1, floating){
        if(floating == true || Math.floor(lower) != lower || Math.floor(upper) != upper){
            return Math.random() * (upper - lower) + lower;
        }else{
            return Math.random() * (upper - lower + 1) + lower;
        }
    },
    assignIn: function(...objects){
        let ans = {};
        for(let i in objects){
            for(let j in objects[i]){
                ans[j] = objects[i][j]; 
            }
        }
        return ans;
    },
    findKey: function(object, predicate = this.identity){
        let pre = this.pretreatIteratee(predicate);

        for(let i in object){
            if(pre(object[i])) return i;
        }
    },
    findLastKey: function(object, predicate = this.identity){
        let pre = this.pretreatIteratee(predicate);
        let key = [];
        let value = [];
        for(let i in object){
            key.push(i);
            value.push(object[i]);
        }
        for(let i = key.length - 1; i >= 0; i --){
            let tmp = {};
            tmp[key[i]] = value[i];
            if(pre(tmp[key[i]])) return key[i];
        }
    },
    forIn: function(object, iteratee = this.identity){
        for(let i in object){
            iteratee(object[i], i, object);
        }
        return object;
    },
    forInRight: function(object, iteratee = this.identity){
        
        let key = [];
        let value = [];
        for(let i in object){
            key.push(i);
            value.push(object[i]);
        }
        for(let i = key.length - 1; i >= 0; i --){
            iteratee(value[i], key[i], object);
        }
        return object;
    },
    forOwn: function(object, iteratee = this.identity){
        for(let i in object){
            if(object.hasOwnProperty(i) == true){
                if(!iteratee(object[i], i, object)) break;
            }
                
        }
        return object;
    },
    forOwnRight: function(object, iteratee = this.identity){
        
        let key = [];
        let value = [];
        for(let i in object){
            if(object.hasOwnProperty(i)){
                key.push(i);
                value.push(object[i]);
            }            
        }
        for(let i = key.length - 1; i >= 0; i --){
            if(!iteratee(value[i], key[i], object)) break;
        }
        return object;
    },
    constant: function(value){
        return function(){
            return value;
        }
    },
    functions: function(object){

        let ans = [];
        for(let i in object){
            if(object.hasOwnProperty(i) && typeof(object[i]) == 'function'){
                ans.push(i);
            }
        }
        return ans;
    },
    functionsIn: function(object){

        let ans = [];
        for(let i in object){
            if(typeof(object[i]) == 'function'){
                ans.push(i);
            }
        }
        return ans;
    },
    invertBy: function(object, iteratee = this.identity){

        let ans = {};
        for(let i in object){
            if(!ans[iteratee(object[i])]) ans[iteratee(object[i])] = [];
            ans[iteratee(object[i])].push(i);
        }
        return ans;
    },
    minBy: function(array, iteratee = this.identity){

        let pre = this.pretreatIteratee(iteratee);
        let min = array[0];

        for(let i = 1; i < array.length; i ++){
            if(pre(array[i]) < pre(min)) min = array[i];
        }
        return min;
    },
    defaultsDeep: function(object, ...sources){

        for(let i = 0; i < sources.length; i ++){
            for(let j in sources[i]){
                if(object[j]){
                    object[j] = defDeep(object[j], sources[i][j])
                }else{
                    object[j] = sources[i][j];
                }
            }
        }

        function defDeep(object, addobj){
            
            for(let i in addobj){
                if(typeof(addobj[i]) == 'object'){
                    object[i] = defDeep(object, addobj[i]);
                }else{
                    if(!object[i]) object[i] = addobj[i];
                }
            }
            return object;
        }

        return object;
    },
    keysIn: function(object){
        let ans = [];
        for(let i in object){
            ans.push(i);
        }
        return ans;
    },
    mapKeys: function(object, iteratee = this.identity){

        let ans = {};
        let pre = this.pretreatIteratee(iteratee);
        for(let i in object){
            ans[pre(object[i], i, object)] = object[i];
        }
        return ans;
    },
    mapValues: function(object, iteratee = this.identity){
        let ans = {};
        let pre = this.pretreatIteratee(iteratee);
        for(let i in object){
            ans[i] = pre(object[i], i , object);
        }
        return ans;
    },
    omitBy: function(object, predicate = this.identity){
        let ans = {};
        for(let i in object){
            if(!predicate(object[i], i)) ans[i] = object[i];
        }
        return ans;
    },
    pickBy: function(object, predicate = this.identity){
        let ans = {};
        for(let i in object){
            if(predicate(object[i], i)) ans[i] = object[i];
        }
        return ans;
    },
    result: function(object, path, defaultValue){
        let ans = this.get(object, path, defaultValue);
        if(typeof(ans) == 'function') return ans();
        else return ans;
    },
    unescape: function(string = '') {
        let map = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&apos;": "'",
        };
        for (let i in map) {
            let r = new RegExp(i, "g");
            string = string.replace(r, map[i]);
        }
        return string;
    },
    defaultTo: function(value, defaultValue){
        if(this.isNaN(value) || this.isNil(value)) return defaultValue;
        return value;
    },
    rangeRight: function(...args){
        let tmp = this.range(...args);
        let ans = [];
        for(let i = tmp.length - 1; i >= 0; i --){
            ans.push(tmp[i]);
        }
        return ans;
    },
    times: function(n, iteratee = this.identity){
        let ans = [];
        for(let i = 0; i < n; i ++){
            ans.push(iteratee(i));
        }
        return ans;
    },
    toPath: function(value){
        let arr = value.split('.');
        let re1 = /(?<=\[)\d+(?=\])/;
        let ans = [];
        for(let i = 0; i < arr.length; i ++){
            if(re1.test(arr[i])){
                
                let str = '';
                for(let j = 0; j < arr[i].length; j ++){
                    if(arr[i][j] == '[') break;
                    str += arr[i][j];
                }
                ans.push(str);
                let tmp = re1.exec(arr[i]);
                ans.push(tmp[0]);

            }else{
                ans.push(arr[i]);
            }
        }
        return ans;

    },
    cloneDeep: function(value){
        let ans;
        if(Array.isArray(value)){
            ans = [];
            for(let i = 0; i < value.length; i ++){
                ans[i] = this.cloneDeep(value[i]);
            }
        }else if(Object.prototype.toString.call(value) === '[object Object]'){
            ans = {};
            for(let i in value){
                ans[i] = this.cloneDeep(value[i]);
            }
        }else{
            return value;
        }
        return ans;
    },
    uniqueId: function(prefix = ''){
        if(this.uniqId == null) this.uniqId = 1;
        return prefix + (this.uniqId ++);
    },
    matches: function(source){
        return function(obj){
            for(let i in source){
                if(obj[i] != source[i]) return false;
            }
            return true;
        }
    },
    property: function(path){
        let arr = this.toPath(path);
        return function(obj){
            return nonmit.get(obj, arr);
        }
    },
    ary: function(func, n = func.length){
        return function(...arr){
            arr = arr.slice(0, n);
            return func(...arr);
        }
    },
    unary: function(func){
        return function(...arr){
            arr = arr.slice(0, 1);
            return func(...arr);
        }
    },
    negate: function(predicate){

        return function(value){
            return predicate(value) == true ? false :true;
        }
    },
    once: function(func){
        //不确定
        let ans;

        return function(...args){

            if(this.cnt == null){
                ans =  function(...args){
                   return func(...args)
                }
                this.cnt = true;
            }
            return ans;
        }

    },
    spread: function(func, start = 0){

        return function(array){

            return func(...array);
        }
    },
    conformsTo: function(object, source){
        
        for(let i in object){
            
            if(source[i]){
                let pre = this.pretreatIteratee(source[i]);
                if(!pre(object[i])) return false;
            }
        }
        return true;
    },
    toLower: function(string = ''){
        let ans = '';
        for(let i = 0; i < string.length; i ++){
            if(string[i].charCodeAt() >= 65 &&  string[i]. charCodeAt() <= 90){
                ans += String.fromCharCode(string[i].charCodeAt() + 32);
            }else ans += string[i]; 
        }
        return ans;
    },
    toUpper: function(string = ''){
        let ans = '';
        for(let i = 0; i < string.length; i ++){
            if(string[i].charCodeAt() >= 97 &&  string[i]. charCodeAt() <= 122){
                ans += String.fromCharCode(string[i].charCodeAt() - 32);
            }else ans += string[i]; 
        }
        return ans;
    },
    valuesIn: function(object){
        let ans = [];
        for(let i in object){
            ans.push(object[i]);
        }
        return ans;
    },
    isSet: function(value){
        if(value.constructor.name == 'Set') return true;
        return false;
    },
    isWeakSet: function(value){
        if(value.constructor.name == 'WeakSet') return true;
        return false;
    },
    isMap: function(value){
        if(value.constructor.name == 'Map') return true;
        return false;
    },
    isWeakMap: function(value){
        if(value.constructor.name == 'WeakMap') return true;
        return false;
    },
    isUndefined: function(value){
        if(this.isNull(value)) return false;
        if(value == undefined) return true;
        else return false;
    },
    isSymbol: function(value){
        return Object.prototype.toString.call(value) == '[object Symbol]';
    },
    isSafeInteger: function(value){
        return this.isInteger(value) && value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER;
    },
    isPlainObject: function(value){
        if(!Object.getPrototypeOf(value)) return true;
        return value.constructor.name == 'Object';
    },
    isMatch: function(object, source){
        for(let i in source){
            if(this.isObject(object[i]) && this.isObject(source[i])){
                if(!this.isMatch(object[i], source[i])) return false;
            }else if(this.isObject(object[i]) || this.isObject(source[i])) return false;
            else if(object[i] != source[i]) return false;
        }
        return true;
    },
    isMatchWith: function(object, source, customizer){
        for(let i in source){
            if(!customizer(object[i], source[i], i, object, source)) return false;
        }
        return true;
    },
    isError: function(value){
        let re1 = /Error/;
        let name = value.constructor.name;
        return re1.test(name);
    },
    isElement: function(value){
        if(this.isNull(value)) return false;
        let re1 = /Element/;
        let name = value.constructor.name;
        return re1.test(name);
    },
    isEmpty: function(value){
        if(this.isNil(value)) return true;
        if(this.isArrayLike(value) && value.length == 0) return true;
        return this.size(value) == undefined || this.size(value) == 0;
    },
    isLength: function(value){
        return this.isInteger(value) && value >= 0 && value <= 0xffffffff; 
    },
    toPairs: function(object){
        let ans = [];
        for(let i in object){
            if(object.hasOwnProperty(i)){
                ans.push([i, object[i]]);
            }
        }
        return ans;
    },
    toPairsIn: function(object){
        let ans = [];
        for(let i in object){
            ans.push([i, object[i]]);
        }
        return ans;
    },
    transform(object, iteratee=_.identity, accumulator){
        if(accumulator == null){
            if(Array.isArray(object)) accumulator = [];
            else accumulator = {};
        }

        for(let i in object){
            if(!iteratee(accumulator, object[i], i, object)) break;
        }
        return accumulator;
    },
    unset: function(object, path){
        object = this.set(object, path, null);
        return object;
    },
    update: function(object, path, updater){
        object = this.set(object, path, updater);
        return object;
    }
    
}
