function transporMatriz(A){
    
    console.log("Matriz Original:");
    imprimirMatriz(A);

    
    const transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta.push([]);
        for (let j = 0; j < A.length; j++) {
            transposta[i].push(A[j][i]);
        }
    }

    
    console.log("Matriz Transposta:");
    imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
    console.log(); 
}


const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matrizOriginal);
