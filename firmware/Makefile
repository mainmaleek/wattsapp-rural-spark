CC = gcc
CFLAGS = -I. -Wall -O2
SRC = main.c src/sensors.c src/storage.c src/protocol.c
OBJ = $(SRC:.c=.o)
TARGET = powerbox_firmware

all: $(TARGET)

$(TARGET): $(OBJ)
	$(CC) $(CFLAGS) -o $(TARGET) $(OBJ) -lm

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJ) $(TARGET)

run: all
	./$(TARGET)

.PHONY: all clean run
