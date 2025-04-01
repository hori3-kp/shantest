@ECHO "Making Proto For Go ..."
protoc --go_out=paths=source_relative:. base/*.proto
protoc --go_out=paths=source_relative:. --proto_path=. client/login/*.proto
protoc --go_out=paths=source_relative:. --proto_path=. client/lobby/*.proto
protoc --go_out=paths=source_relative:. --proto_path=. client/game/*.proto
protoc --go_out=paths=source_relative:. --proto_path=. client/*.proto
PAUSE
