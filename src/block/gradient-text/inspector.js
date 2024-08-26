/**
 * WordPress dependencies
 */
import {
	FontSizePicker,
	InspectorControls,
	__experimentalLetterSpacingControl as LetterSpacingControl,
	LineHeightControl,
	__experimentalTextDecorationControl as TextDecorationControl,
	__experimentalTextTransformControl as TextTransformControl,
} from '@wordpress/block-editor';
import {
	BaseControl,
	__experimentalBorderControl as BorderControl,
	__experimentalBoxControl as BoxControl,
	Button,
	ButtonGroup,
	ColorPalette,
	GradientPicker,
	PanelBody,
	RangeControl,
	TabPanel,
} from '@wordpress/components';
import { useState } from "@wordpress/element";
import { __ } from '@wordpress/i18n';

import {
	ALIGNMENT_POSITION,
	HEADER_TAGS,
} from "./constants";
const Inspector = ({ attributes, setAttributes }) => {
	
	const {
		headingTag,
		headingAlign,
		textGradient,
		textColor,
		textBodyBg,
		textBodyGradient,
		fontSize,
		textDecoration,
		textTransform,
		letterSpacing,
		lineHeight,
		gtbPadding,
		gtbMargin,
		gtbBorder,
		gtbBorderRadius,
	} = attributes;

	

	const [colorSwitcher, setColorSwitcher] = useState("gradient");

	return (
		<InspectorControls>
			<div className="gtb-panel-control">
				<TabPanel
					className="gtb-parent-tab-panel"
					activeClass="active-tab"
					tabs={[
						{
							name: "general",
							title: __('General', 'db-gradient-text-block'),
							className: "gtb-tab general",
						},
						{
							name: "styles",
							title: __('Style', 'db-gradient-text-block'),
							className: "gtb-tab styles",
						},
						{
							name: "advance",
							title: __('Advanced', 'db-gradient-text-block'),
							className: "gtb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"gtb-tab-controls " + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody
										title={__('Heading', 'db-gradient-text-block')}
										initialOpen={false}
									>
										<BaseControl
											id="heading-tag"
											label={__('Tag', 'db-gradient-text-block')}
										>
											<ButtonGroup>
												{HEADER_TAGS.map(
													(tag, index) => (
														<Button
															key={index}
															isSecondar={headingTag !== tag.value}
															isPrimary={headingTag === tag.value}
															onClick={() => 
																setAttributes({headingTag:tag.value})
															}
														>
															{tag.label}
														</Button>
													)
												)}
											</ButtonGroup>
										</BaseControl>
										<BaseControl
											id="gtb-text-alignment"
											label={__("Alignment", 'db-gradient-text-block')}
										>
											<ButtonGroup
												id='gtb-text-group-alignment'
											>
												{ALIGNMENT_POSITION.map(
													(item, index) => (
														<Button
															key={index}
															isSecondary={headingAlign === item.value}
															isPrimary={headingAlign !== item.value}
															onClick={() =>
																setAttributes({headingAlign:item.value})
															}
														>
															{item.label}
														</Button>
													)
												)}
											</ButtonGroup>
										</BaseControl>
									</PanelBody>
									<PanelBody
										title={__("Text", "db-gradient-text-block")}
										initialOpen={false}
									>
										<BaseControl
											id="gtb-font-decoration"
										>
											<FontSizePicker
												value={fontSize}
												onChange={(value) => setAttributes({fontSize:value})}
												__nextHasNoMarginBottom
											/>
											<TextDecorationControl
												value={textDecoration}
												onChange={(value) => setAttributes({ textDecoration: value })}
											/>
											<TextTransformControl
												value={textTransform}
												onChange={(value) => setAttributes({ textTransform: value })}
											/>
											<LetterSpacingControl
												value={letterSpacing}
												onChange={value => {
													setAttributes({letterSpacing: value});
												}}
												__nextHasNoMarginBottom
											/>
											<LineHeightControl
												value={lineHeight}
												onChange={value => {
													setAttributes({lineHeight: value});
												}}
												__nextHasNoMarginBottom
											/>
										</BaseControl>
									</PanelBody>
									<PanelBody
										title={__("Background", "db-gradient-text-block")}
										initialOpen={false}
									>
									<BaseControl>
										<ButtonGroup>
											{[
												{
													label: __("Color", "db-gradient-text-block"),
													value: "color",
												},
												{
													label: __("Gradient", "db-gradient-text-block"),
													value: "gradient",
												}
											].map(({ value, label }, index) => (
												<Button
													key={index}
													isPrimary={colorSwitcher === value}
													isSecondar={colorSwitcher !== value}
													onClick={() => setColorSwitcher(value)}
												>
													{label}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>
									{colorSwitcher === "color" && (
										<ColorPalette
											colors={[
												{name: "red", color: "#f00"},
												{name: "white", color: "#FFF"},
												{name: "blue", color: "#00f"},
											]}
											value={textBodyBg}
											onChange={(value) => setAttributes({textBodyBg: value})}
										/>
									)}
									{colorSwitcher === "gradient" && (
										<GradientPicker
											value={textBodyGradient}
											onChange={(value) => setAttributes({ textBodyGradient: value })}
											gradients={ [
												{
													name: 'JShine',
													gradient:
														'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
													slug: 'jshine',
												},
												{
													name: 'Moonlit Asteroid',
													gradient:
														'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
													slug: 'moonlit-asteroid',
												},
												{
													name: 'Rastafarie',
													gradient:
														'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
													slug: 'rastafari',
												},
											] }
										/>
									)}
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody
										title={__("Text Color", "db-gradient-text-block")}
										initialOpen={false}
									>
										<BaseControl>
											<ButtonGroup>
												{[
													{
														label: __("Color", "db-gradient-text-block"),
														value: "color",
													},
													{
														label: __("Gradient", "db-gradient-text-block"),
														value: "gradient",
													}
												].map(({ value, label }, index) => (
													<Button
														key={index}
														isPrimary={colorSwitcher === value}
														isSecondar={colorSwitcher !== value}
														onClick={() => setColorSwitcher(value)}
													>
														{label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>
										{colorSwitcher === "color" && (
											<ColorPalette
												colors={[
													{name: "red", color: "#f00"},
													{name: "white", color: "#FFF"},
													{name: "blue", color: "#00f"},
												]}
												value={textColor}
												onChange={(value) => setAttributes({textColor: value})}
											/>
										)}
										{colorSwitcher === "gradient" && (
											<GradientPicker
												value={textGradient}
												onChange={(value) => setAttributes({ textGradient: value })}
												gradients={ [
													{
														name: 'JShine',
														gradient:
															'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
														slug: 'jshine',
													},
													{
														name: 'Moonlit Asteroid',
														gradient:
															'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
														slug: 'moonlit-asteroid',
													},
													{
														name: 'Rastafarie',
														gradient:
															'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
														slug: 'rastafari',
													},
												] }
											/>
										)}
									</PanelBody>
									<PanelBody
										title={__("Space", "db-gradient-text-block")}
										initialOpen={false}
									>
										<BoxControl
											label={__("Padding", "db-gradient-text-block")}
											values={gtbPadding}
											onChange={(nextValues) => setAttributes({gtbPadding: nextValues})}
											units={[]}
											allowReset={false}
										/>
										<BoxControl
											label={__("Margin", "db-gradient-text-block")}
											values={gtbMargin}
											onChange={(nextValues) => setAttributes({gtbMargin: nextValues})}
											units={[]}
											allowReset={false}
										/>
									</PanelBody>
									<PanelBody
										title={__("Border", "db-gradient-text-block")}
										initialOpen={false}
									>
										<BorderControl
											label={__("Border", "db-gradient-text-block")}
											value={gtbBorder}
											onChange={(nextValues) => setAttributes({gtbBorder: nextValues})}
										/>
										<RangeControl
											label={__("Border Radius (PX)", "db-gradient-text-block")}
											value={gtbBorderRadius}
											onChange={(nextValues) => setAttributes({gtbBorderRadius: nextValues})}
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
