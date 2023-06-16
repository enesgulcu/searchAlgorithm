
const LevenshteinDistance = (str1: string, str2: string): string => {
    const m: number = str1.length;
    const n: number = str2.length;
  
    if (m === 0) return n.toString();
    if (n === 0) return m.toString();
  
    const matrix: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(null));
  
    for (let i: number = 0; i <= m; i++) {
      matrix[i][0] = i;
    }
  
    for (let j: number = 0; j <= n; j++) {
      matrix[0][j] = j;
    }
  
    for (let i: number = 1; i <= m; i++) {
      for (let j: number = 1; j <= n; j++) {
        const cost: number = str1.charAt(i - 1) === str2.charAt(j - 1) ? 0 : 1;
  
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // deletion
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j - 1] + cost // substitution
        );
      }
    }
  
    const distance: number = matrix[m][n];
    const similarity: number = (1 - distance / Math.max(m, n)) * 100;
  
    return similarity.toFixed(2);
}

export default LevenshteinDistance;