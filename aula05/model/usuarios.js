import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class Usuarios {
    async insert(usuario) {
        return await prisma.Usuarios.create({
            data: usuario
        });
    }
}