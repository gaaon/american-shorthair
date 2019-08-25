workflow "Build and Deploy" {
  resolves = [
    "Docker Tag",
    "Push image to ECR",
  ]
  on = "push"
}

action "Docker build" {
  uses = "actions/docker/cli@master"
  args = ["build", "-t", "american-shorthair", "."]
}

action "Login to ECR" {
  uses = "actions/aws/cli@master"
  env = {
    AWS_DEFAULT_REGION = "ap-northeast-2"
  }
  args = "ecr get-login --no-include-email --region $AWS_DEFAULT_REGION | sh"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "Docker Tag" {
  uses = "actions/docker/tag@fe7ed3ce992160973df86480b83a2f8ed581cd50"
  needs = [
    "Docker build",
  ]
  env = {
    IMAGE_NAME = "american-shorthair"
  }
  secrets = ["CONTAINER_REGISTRY_PATH"]
  args = ["$IMAGE_NAME", "$CONTAINER_REGISTRY_PATH/$IMAGE_NAME"]
}

action "Push image to ECR" {
  uses = "actions/docker/cli@master"
  needs = ["Login to ECR", "Docker Tag"]
  args = ["push", "$CONTAINER_REGISTRY_PATH/$IMAGE_NAME"]
  secrets = ["CONTAINER_REGISTRY_PATH"]
  env = {
    IMAGE_NAME = "american-shorthair"
  }
}
