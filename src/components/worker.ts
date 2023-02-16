onmessage = function (e) {
  console.log(`En el worker: ${e.data}`)

  const fibonacci = fib(e.data)

  this.postMessage(fibonacci)
}

function fib(n : number) : number{
  if( n < 2 ){
    return n
  }
  return fib(n - 1) + fib(n - 2)
}
