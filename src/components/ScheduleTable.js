import { Table, Container } from "react-bootstrap";

function ScheduleTable() {
  return (
    <Container className="my-4">
      <h2 className="section-title mb-4">Festival Schedule</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Time</th>
            <th>Artist / Event</th>
            <th>Stage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4:00 PM</td>
            <td>Katy Perry</td>
            <td>Lake Stage</td>
          </tr>
          <tr>
            <td>5:00 PM</td>
            <td>David Guetta</td>
            <td>Electric Stage</td>
          </tr>
          <tr>
            <td>6:00 PM</td>
            <td>Justin Bieber</td>
            <td>Main Stage</td>
          </tr>
          <tr>
            <td>7:00 PM</td>
            <td>Bruno Mars</td>
            <td>Main Stage</td>
          </tr>
          <tr>
            <td>7:30 PM</td>
            <td>Don Toliver</td>
            <td>Electric Stage</td>
          </tr>
          <tr>
            <td>8:00 PM</td>
            <td>Rihanna</td>
            <td>Lake Stage</td>
          </tr>
          <tr>
            <td>8:30 PM</td>
            <td>Travis Scott</td>
            <td>Main Stage</td>
          </tr>
          <tr>
            <td>9:30 PM</td>
            <td>Drake</td>
            <td>Main Stage</td>
          </tr>
          <tr>
            <td>10:30 PM</td>
            <td>The Weeknd</td>
            <td>Main Stage</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default ScheduleTable;