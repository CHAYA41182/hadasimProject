

def print_triangle(width, height):
    # Check if the width is even and longer than 2 times the height
    if width > height * 2 or width % 2 == 0:
        print("The triangle cannot be printed.")
        return

    # Print the top row
    print(" " * (width // 2) + "*")

    # Calculate the number of rows in the middle
    if width > 3:  # if the width is 3, there are no middle rows
        middle_rows = (height - 2) // ((width + 1) // 2 - 2)
        reminder_rows = (height - 2) % ((width + 1) // 2 - 2)

        # print the second row
        for i in range(middle_rows + reminder_rows):
            print(" " * (width // 2 - 1) + "*" * 3)
        # print the middle rows
        for i in range(5, width, 2):
            for j in range(middle_rows):
                print((" " * (width // 2 - ((i - 1) // 2)) + ("*" * i)))

    # print the bottom row
    if height > 1:
        print("*" * width)


choiceShape = int(input("choose which shape you want: 1 for rectangle, 2 for triangle, or 3 to exit: "))
width = int(input("Enter the width: "))
height = int(input("Enter the height: "))
if choiceShape == 1:
    if width == height or abs(width - height) > 5:
        print("area: ", width * height)
    else:
        print("perimeter: ", 2 * (width + height))
elif choiceShape == 2:
    choiceAction = input("choose which action you want: 1 for calculate perimeter, 2 for print the triangle: ")
    if choiceAction == 1:
        # Assuming that the triangle is an isosceles triangle
        print("perimeter:", ((width / 2) ** 2 + height ** 2) ** 0.5 + width)
    else:
        if height * 2 < width:
            print("The triangle cannot be printed")
        else:
            print_triangle(width, height)
