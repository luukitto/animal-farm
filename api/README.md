# Animal Farm with chief pig
This is back-end repository for animal farm assignment.

Thanks for such fun project, I enjoyed thoroughly over the weekend and 6 hours further.
It's about 6AM.

Anyway,
Good morning to you and good night to myself.

P.S. For NestJs related instructions, please take a look at [Guide](guide.md).

Cheers,
Luka

Let's keep these 2 entries here, anyway:

## Initialize (PostgreSQL) database
```postgresql
CREATE ROLE pig login password 'bidzina' superuser;
CREATE DATABASE animal_farm;
GRANT ALL PRIVILEGES ON DATABASE animal_farm to pig;
```

### Migrations

```bash
npm run migration:run
```
