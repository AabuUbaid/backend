import db from "../db/index.js";

export async function create({ name, email }) {
    const query = `
    INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING id, name, email, created_at;
  `;
    const values = [name, email];
    const { rows } = await db.query(query, values);
    return rows[0];
}

export async function findByEmail(email) {
    const { rows } = await db.query(
        `SELECT id, name, email FROM users WHERE email = $1`,
        [email]
    );
    return rows[0] || null;
}

export async function findById(id) {
    const { rows } = await db.query(
        `SELECT id, name, email, created_at FROM users WHERE id = $1`,
        [id]
    );
    return rows[0] || null;
}
