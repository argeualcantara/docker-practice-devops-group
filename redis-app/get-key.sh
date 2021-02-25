RESPONSE=$(curl -s http://localhost:3000/$1)
printf "RESPONSE FROM REDIS APP:\n${RESPONSE}\n"