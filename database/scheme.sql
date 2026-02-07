CREATE TABLE candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    experience INT,
    skills TEXT
);

CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT,
    crisis_score INT,
    sustainability_score INT,
    motivation_score INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

CREATE TABLE rankings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT,
    total_score FLOAT,
    rank_position INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

CREATE INDEX idx_total_score ON rankings(total_score);
