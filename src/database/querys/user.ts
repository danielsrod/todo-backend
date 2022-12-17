export const doLogin = `
    select
        id,
        username,
        email,
        document,
        to_char(created_at, 'dd/mm/yyyy hh24:mi:ss')
    from users
    where 1 = 1
        and (
            username = $1 or email = $1 or document = $1
        )
        and password = $2
`;
