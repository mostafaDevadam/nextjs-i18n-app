

export const callApi = async (url: string, method: "GET" | "POST" | "PATCH") => {
 const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        next: { revalidate: 60 },
        cache: 'force-cache',
    });
    const data = await res.json();
    return data
}