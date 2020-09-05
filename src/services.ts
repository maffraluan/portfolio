const apiUrl = `https://api.github.com/users/maffraluan/repos`

interface IFetchProps {
    id?: number,
    name: string,
    description: string,
}

const fetchAll = async (): Promise<IFetchProps[]> => {
    const res = await fetch(apiUrl);
    const json = await res.json();

    return json as IFetchProps[]
};

export { fetchAll }
