#from gpiozero import LED
from time import sleep
import psutil
from datetime import datetime

#led_yellow = LED(20)
#led_red = LED(21)
#led_green = LED(27)

file = open("/home/ubuntu/Desktop/cpu_usage_log.txt", "a")

while True:
    cpu_usage = psutil.cpu_percent(interval = 5)
    print(f"Total CPU Usage: {cpu_usage}%")

#    if cpu_usage < 50:
#        led_green.on()
#        led_yellow.off()
#        led_red.off()

#    elif cpu_usage < 80:
#        led_yellow.on()
#        led_red.off()
#        led_green.off()

 #   else:
 #       led_red.on()
 #       led_green.off()
 #       led_yellow.off()

    timestamp = f"{datetime.now().strftime('%Y/%m/%d %HH %MM %SS')}"
    Data = f"{timestamp} - CPU Usage: {cpu_usage}%\n"
    print(f'{timestamp} - CPU Usage: {cpu_usage}%')


file.close()
