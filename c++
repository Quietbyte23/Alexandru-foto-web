#include <iostream>
#include <string>

void startGame() {
    std::string choice;
    std::cout << "--- THE HACK CLUB VOYAGE ---" << std::endl;
    std::cout << "Your ship has sailed for 26 hours. You see an island ahead." << std::endl;
    std::cout << "Do you want to LAND or keep SAILING? (type land/sail): ";
    std::cin >> choice;

    if (choice == "land" || choice == "LAND") {
        std::cout << "\nYou dropped anchor! The Hack Club crew welcomes you and hands over your Blahaj!" << std::endl;
    } else {
        std::cout << "\nYou brave the open seas! The adventure continues into the deep blue." << std::endl;
    }
}

int main() {
    startGame();
    return 0;
}
