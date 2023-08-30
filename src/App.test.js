import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import App from './App';
import Trainings from './components/Trainings/Trainings';

afterEach(cleanup)

test('renders a heading, a logo and a table', () => {
  render(<App />);
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent('Liste des entraînements');
  expect(screen.getByRole("table")).toBeInTheDocument();
});

test('button should be clicked', () => {
  render(<Trainings />);
  const button = screen.getAllByRole('button').at(0);
  fireEvent.click(button);
  expect(button).toBeValid();
})

test('table should have four columns', () => {
  render(<Trainings />);
  const tableheaders = screen.getAllByRole('columnheader');
  expect(tableheaders).toHaveLength(4);
});

test('columns should be named Titre Catégorie and Statut', () => {
  render(<Trainings />);
  const tableheader1 = screen.getAllByRole('columnheader').at(0);
  const tableheader2 = screen.getAllByRole('columnheader').at(1);
  const tableheader3 = screen.getAllByRole('columnheader').at(2);
  expect(tableheader1.innerHTML).toBe("Titre");
  expect(tableheader2.innerHTML).toBe("Catégorie");
  expect(tableheader3.innerHTML).toBe("Statut");
});

test('trainings to start should decrease when button row 1 is clicked', () => {
  render(<Trainings />);

  const trainingsToStart = screen.getAllByText(/à commencer/i).length; 
  console.log(trainingsToStart); //Logs : 6

  const button = screen.getAllByRole('button').at(0);
  for(let i = 1; i<trainingsToStart; i++){
    fireEvent.click(button);
    expect(screen.getAllByText(/à commencer/i)).toHaveLength(trainingsToStart-i);
  }
})

test('trainings won or lost should increase when button row 1 is clicked', () => {
  render(<Trainings />);

  const trainingsWon = screen.getAllByText(/victoire/i).length; 
  const trainingsLost = screen.getAllByText(/défaite/i).length; 
  const trainingsDone = trainingsWon + trainingsLost;
  const allTrainings = screen.getAllByRole('row').length-1;
  const remainingTrainings = allTrainings - trainingsDone; 

  console.log(trainingsDone); //Logs : 3
  console.log(allTrainings); //Logs: 9
  console.log(remainingTrainings); //Logs: 6

  const button = screen.getAllByRole('button').at(0);
  for(let i = 1; i<remainingTrainings; i++){
    fireEvent.click(button);
    expect(screen.getAllByText(/victoire/i).length + screen.getAllByText(/défaite/i).length).toBe(trainingsDone+i);
  }
})