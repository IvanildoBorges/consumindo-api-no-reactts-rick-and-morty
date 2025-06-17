// função genérica
async function fetchEntidade<T>(
    URL: string,
    headers: HeadersInit | undefined,
    endpoint: string,
    ids: number | number[] | undefined,
    Model: new (data: T) => T
): Promise<T[]> {
    try {
        let url = `${URL}/${endpoint}`;

        if (ids !== undefined) {
            url += `/${Array.isArray(ids) ? ids.join(",") : ids}`;
        }

        const response = await fetch(url, { headers });
        const data = await response.json();

        // Caso 1: vários itens
        if (Array.isArray(data)) {
            return data.map((item) => new Model(item));
        }

        // Caso 2: único item
        if (ids !== undefined) {
            return [new Model(data)];
        }

        // Caso 3: consulta geral com info + results
        if (data.results) {
            return data.results.map((item: T) => new Model(item));
        }

        return [];
    } catch (error) {
        console.error(`Erro ao buscar ${endpoint}:`, error);
        return [];
    }
}

export default fetchEntidade;