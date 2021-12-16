export type Action = { type: "ADD_TOKEN" | "ADD_NAME" | "ADD_TIPO" | "ADD_ID"; payload: any };

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
});

export const addName = (name: string): Action => ({
    type: "ADD_NAME",
    payload: name,
});

export const addId = (id: number): Action => ({
    type: "ADD_ID",
    payload: id,
});
// addicione o action para o tipo de usuario
export const addTipo = (tipo: string): Action => ({
    type: "ADD_TIPO",
    payload: tipo,
});