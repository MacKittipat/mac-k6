# mac-k6

### Generate live dashboard

```
// Windows
docker run -v C:\Users\Mac\Projects\mac-k6:/scripts -p 5665:5665 -it ghcr.io/szkiba/xk6-dashboard:latest run --out=dashboard /scripts/script.js
```

Open dashboard, http://localhost:5665/ui/?endpoint=/
Reference, https://github.com/szkiba/xk6-dashboard