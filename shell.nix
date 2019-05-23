# set pinned nixpkgs with `--arg pinned <path to pin info>
let
  pinnedVersion = pin: builtins.fromJSON (builtins.readFile pin);
  pinnedPkgs = pin:  import (builtins.fetchTarball {
    inherit (pinnedVersion pin) url;
    name = "nixpkgs-${(pinnedVersion pin).date}";
  }) {};
  pkgs' = pinned: (
    if (!isNull pinned) then pinnedPkgs pinned 
    else import <nixpkgs> {});
in
{ pkgs ? pkgs' pinned, pinned ? null }:
let 

in
pkgs.mkShell {
  name = "gpse-env";
  buildInputs = with pkgs; [
    # put packages here.    
    nodejs
    jdk11
  ];

  shellHook = ''
  '';
}