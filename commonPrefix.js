function longestCommonPrefix(lst) {
    let shortestLen = 9999;
    let res = "";
    lst.forEach(element => {
        shortestLen = Math.min(shortestLen, element.length);
    });
    for (var i = 0; i < shortestLen; i++) {
        let currentChar = lst[0][i];
        let flag = true;
        for (var j = 0; j < lst.length; j++)
        {
            if (lst[j][i] != currentChar)
            {
                flag = false;
            }
        }
        if (flag == true)
        {
            res+=(lst[0][i]);
        }
    }

    return res;
}


const ans = longestCommonPrefix(["flower", "flow", "flight"]);

console.log(ans);