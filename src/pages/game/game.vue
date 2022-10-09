<template>
	<MainTemplate>
		<template #game-field>
			<div
				v-for="(cell, index) of GAME_MATRIX"
				:key="`cell${index}`"
			>
				{{ index + 1 }}
			</div>
		</template>
	</MainTemplate>
</template>

<script setup lang="ts">
import MainTemplate from '@templates/main-template';
import { useGameMatrix } from '@composables/useGameMatrix';

const { GAME_MATRIX } = useGameMatrix(81);
</script>

<style src="./game.css" />
