import getopt
import sys

argv = sys.argv[1:]

opts, args = getopt.getopt(argv, 'a:b:', ['finicio', 'ffin'])

if len(opts)<2:
    print('sin argumentos')

for opt, arg in opts:    
    print('argumento es '+ arg)

