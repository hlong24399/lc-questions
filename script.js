function genSubset(str)
{
    const res = [""];
    for (var i = 0; i < str.length; i++)
    {
        let c = res.length;
        for (var j = 0; j < c; j++)
        {
            res.push(res[j] + str[i]);
        }
    }

    console.log(res);
}


genSubset("abcd");