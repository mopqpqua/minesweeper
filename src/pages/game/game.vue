<template>
	<MainTemplate>
		<template #game-field>
			<div
				v-for="(row, rowIndex) of GAME_MATRIX"
				:key="`row${rowIndex}`"
			>
				<span
					v-for="(cell, cellIndex) of row"
					:key="`cell${cellIndex}`"
				>
					{{ cell }}
				</span>
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
