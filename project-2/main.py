def get_shape_number():
    choice_shape = input("choose which shape you want: 1 for rectangle, 2 for triangle, or 3 to exit: ")
    return choice_shape

def get_height_and_width():
    width = int(input("enter width:"))
    height = int(input("enter height:"))
    return width, height

def print_rectangle(width, height):
    if width == height or abs(width - height) > 5:
        print("area: ", width * height)
    else:
        print("perimeter: ", 2 * (width + height))


def print_triangle(width, height):
    if width > height * 2 or width % 2 == 0:
        print("The triangle cannot be printed.")
        return

    print(" " * (width // 2) + "*")

    if width > 3:
        divisor = ((width + 1) // 2 - 2)
        middle_rows = (height - 2) // divisor
        reminder_rows = (height - 2) % divisor

        for i in range(middle_rows + reminder_rows):
            print(" " * (width // 2 - 1) + "*" * 3)

        for i in range(5, width, 2):
            for j in range(middle_rows):
                print((" " * (width // 2 - ((i - 1) // 2)) + ("*" * i)))

    if height > 1:
        print("*" * width)


def calculate_triangle_perimeter(width, height):
    print("perimeter:", width + 2 * ((width / 2) ** 2 + height ** 2) ** 0.5)


def handle_triangle(width, height):
    choice_action = input("choose which action you want: 1 for calculate perimeter, 2 for print the triangle: ")
    if choice_action == '1':
        calculate_triangle_perimeter(width, height)
    else:
        if height * 2 < width or width % 2 == 0:
            print("The triangle cannot be printed")
        else:
            print_triangle(width, height)


def main():
    while True:
        choice_shape = get_shape_number()
        if choice_shape == '3':
            break
        elif choice_shape == '1':
            width, height = get_height_and_width()
            print_rectangle(width, height)
        elif choice_shape == '2':
            width, height = get_height_and_width()
            handle_triangle(width, height)
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
