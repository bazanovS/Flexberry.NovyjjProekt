docker build --no-cache -f SQL\Dockerfile.PostgreSql -t novyjj_proekt/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t novyjj_proekt/app ../..
