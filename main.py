import re
import os
import random
from pprint import pprint

DIR_PATH = os.path.dirname(os.path.realpath(__file__))

# with open(os.path.join(DIR_PATH, "platitudes.txt"), "r") as f:
#   plats = f.read().splitlines()

# plats = [p.replace("\"", "") for p in plats]

# for i in range(len(plats)):
#   plats[i] = re.sub(r"\([\s\S]*?\)", "", plats[i])

# unique = []
# plats = [unique.append(p) for p in plats if p not in unique]
# unique = [u.strip().replace("’", "'") for u in unique]

# pprint(unique)

# with open(os.path.join(DIR_PATH, "new_plats.txt"), "w") as f:
#   f.write("\n".join(unique))

with open(os.path.join(DIR_PATH, "new_plats.txt"), "r") as f:
  plats = f.read().splitlines()

new = open(os.path.join(DIR_PATH, "generated_plats.txt"), "a")


for i in range(10):
  if (random.choice([True, False])):
    p1 = random.choice(plats).split()
    random.shuffle(p1)
  else:
    p1 = random.choice(plats)
    plats.remove(p1)
    p1 = p1.split()
    p2 = random.choice(plats)
    p2 = p2.split()
    random.shuffle(p1)
    random.shuffle(p2)
    p1.extend(p2)
    random.shuffle(p1)

  result = " ".join(p1)
  result = result.lower().capitalize()
  print(result)
  new.write(result + "\n")

new.close()