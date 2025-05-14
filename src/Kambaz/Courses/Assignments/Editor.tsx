export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} /><br /><br />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group"> Assignment Group </label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="COMEDY">Assignment</option>
              <option value="DRAMA">Lab</option>
              <option value="SCIFI">Quiz</option>
            </select><br /><br />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as"> Display Grade As </label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="COMEDY">Percentage</option>
              <option value="DRAMA">GPA</option>
              <option value="SCIFI">Points</option>
            </select><br /><br />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type"> Submission Type </label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value="COMEDY">Online</option>
              <option value="DRAMA">Exam</option>
              <option value="SCIFI">Viva</option>
            </select><br /><br />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-submission-type" id="wd-submission-type"> Online Entry Options </label><br />
            <input type="checkbox" name="check-genre" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry </label><br />

            <input type="checkbox" name="check-genre" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label><br />

            <input type="checkbox" name="check-genre" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

            <input type="checkbox" name="check-genre" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

            <input type="checkbox" name="check-genre" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label><br /><br />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign To</label><br />
            <input id="wd-assign-to" value="Everyone" /><br /><br />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          </td>
          <td>
            <label htmlFor="wd-due-date">Due</label><br />
            <input type="date" value="2024-05-13" id="wd-due-date" /><br /><br />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          </td>
          <td>
            <tr>
              <td>
                <label htmlFor="wd-available-from">Available From</label><br />
                <input type="date" value="2024-05-13" id="wd-available-from" />
              </td>
              <td>
                <label htmlFor="wd-available-until">Until</label><br />
                <input type="date" value="2024-05-13" id="wd-available-until" />
              </td>
            </tr>
          </td>
        </tr>
      </table>
      <hr />
      <p align="right">
        <button type="button"
          id="wd-cancel">
          Cancel
        </button>
        &nbsp;
        <button type="button"
          id="wd-Save">
          Save
        </button>
        </p>

    </div>
  );
}
