/**
 * WordPress dependencies
 */
import {
	FontSizePicker,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
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
	ToggleControl, 
	SelectControl,
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
		showTextMask,
		textMaskMediaId,
		textMaskMediaUrl,
		textMaskSize,
		textMaskPosition,
		textMaskRepeat,
		textBodyBg,
		textBodyGradient,
		textFontSize,
		textDecoration,
		textTransform,
		letterSpacing,
		lineHeight,
		gtbPadding,
		gtbMargin,
		gtbBorder,
		gtbBorderRadius,
		showTextReveal,
		textRevealBg,
		textRevealGradient,
		textRevealDelay,
		textRevealDuration,
		showHoverEffect,
		hoverEffect,
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
															variant={headingTag === tag.value ? 'primary' : 'secondary'}
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
															variant={headingAlign === item.value ? 'secondary' : 'primary'}
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
												value={textFontSize}
												onChange={(value) => setAttributes({textFontSize:value})}
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
													variant={colorSwitcher === value ? 'primary' : 'secondary'}
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
														variant={colorSwitcher === value ? 'primary' : 'secondary'}
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
										title={__("Text Mask", "db-gradient-text-block")}
										initialOpen={false}
									>
										<ToggleControl
											label={__("Enable Text Mask", "db-gradient-text-block")}
											checked={showTextMask}
											onChange={(nextValue) => setAttributes({ showTextMask: nextValue })}
										/>

										{showTextMask && (
											<>
												<MediaUploadCheck>
													<MediaUpload
														onSelect={(media) =>
															setAttributes({
																textMaskMediaId: media?.id || 0,
																textMaskMediaUrl: media?.url || "",
															})
														}
														allowedTypes={["image"]}
														value={textMaskMediaId}
														render={({ open }) => (
															<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
																<Button variant="secondary" onClick={open}>
																	{textMaskMediaUrl
																		? __("Replace Mask Image", "db-gradient-text-block")
																		: __("Select Mask Image", "db-gradient-text-block")}
																</Button>
																{textMaskMediaUrl && (
																	<Button
																		variant="tertiary"
																		onClick={() =>
																			setAttributes({
																				textMaskMediaId: 0,
																				textMaskMediaUrl: "",
																			})
																		}
																	>
																		{__("Remove", "db-gradient-text-block")}
																	</Button>
																)}
															</div>
														)}
													/>
												</MediaUploadCheck>

												{textMaskMediaUrl && (
													<div style={{ marginTop: 10 }}>
														<img
															src={textMaskMediaUrl}
															alt=""
															style={{ maxWidth: "100%", height: "auto", borderRadius: 4 }}
														/>
													</div>
												)}

												<SelectControl
													label={__("Mask Size", "db-gradient-text-block")}
													value={textMaskSize}
													onChange={(value) => setAttributes({ textMaskSize: value })}
													options={[
														{ label: __("Cover", "db-gradient-text-block"), value: "cover" },
														{ label: __("Contain", "db-gradient-text-block"), value: "contain" },
														{ label: __("Auto", "db-gradient-text-block"), value: "auto" },
													]}
												/>

												<SelectControl
													label={__("Mask Position", "db-gradient-text-block")}
													value={textMaskPosition}
													onChange={(value) => setAttributes({ textMaskPosition: value })}
													options={[
														{ label: __("Center", "db-gradient-text-block"), value: "center center" },
														{ label: __("Top", "db-gradient-text-block"), value: "top center" },
														{ label: __("Bottom", "db-gradient-text-block"), value: "bottom center" },
														{ label: __("Left", "db-gradient-text-block"), value: "center left" },
														{ label: __("Right", "db-gradient-text-block"), value: "center right" },
													]}
												/>

												<SelectControl
													label={__("Mask Repeat", "db-gradient-text-block")}
													value={textMaskRepeat}
													onChange={(value) => setAttributes({ textMaskRepeat: value })}
													options={[
														{ label: __("No Repeat", "db-gradient-text-block"), value: "no-repeat" },
														{ label: __("Repeat", "db-gradient-text-block"), value: "repeat" },
														{ label: __("Repeat X", "db-gradient-text-block"), value: "repeat-x" },
														{ label: __("Repeat Y", "db-gradient-text-block"), value: "repeat-y" },
													]}
												/>
											</>
										)}
									</PanelBody>
									<PanelBody
										title={__("Reveal Effect", "db-gradient-text-block")}
										initialOpen={false}
									>
										<ToggleControl
											label={__("Show Text Reveal", "db-gradient-text-block")}
											checked={showTextReveal}
											onChange={(nextValues) => setAttributes({showTextReveal: nextValues})}
										/>
										{showTextReveal && (
											<>
												<BaseControl>
													<ButtonGroup>
														{[
															{
																label: __("Color", "db-gradient-text-block"),
																value: "color",
															},
															{
																label: __("Gradient", "db-gradient-text-block-reveal"),
																value: "gradient",
															}
														].map(({ value, label }, index) => (
															<Button
																key={index}
																variant={colorSwitcher === value ? 'primary' : 'secondary'}
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
														value={textRevealBg}
														onChange={(value) => setAttributes({textRevealBg: value})}
													/>
												)}
												{colorSwitcher === "gradient" && (
													<GradientPicker
														value={textRevealGradient}
														onChange={(value) => setAttributes({ textRevealGradient: value })}
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
												<RangeControl
													label={__("Reveal Delay (seconds)", "db-gradient-text-block")}
													value={textRevealDelay}
													onChange={(value) => setAttributes({textRevealDelay: value})}
													min={0}
													max={5}
													step={0.1}
												/>
												<RangeControl
													label={__("Reveal Duration (seconds)", "db-gradient-text-block")}
													value={textRevealDuration}
													onChange={(value) => setAttributes({textRevealDuration: value})}
													min={0.1}
													max={5}
													step={0.1}
												/>
											</>
										)}
									</PanelBody>
									<PanelBody
										title={__("Hover Effect", "db-gradient-text-block")}
										initialOpen={false}
									>
										<ToggleControl
											label={__("Show Hover Effect", "db-gradient-text-block")}
											checked={showHoverEffect}
											onChange={(nextValues) => setAttributes({showHoverEffect: nextValues})}
										/>
										{showHoverEffect && (
											<SelectControl
												label={ __( 'Hover Effect' ) }
												value={ hoverEffect }
												onChange={ ( nextValues ) => setAttributes({hoverEffect: nextValues}) }
												options={ [
													{ value: 'none', label: 'Select Hover Effect' },
													{ value: 'grow', label: 'Grow' },
													{ value: 'shrink', label: 'Shrink' },
													{ value: 'pulse', label: 'Pulse' },
													{ value: 'pulse-grow', label: 'Pluse Grow' },
													{ value: 'pulse-shrink', label: 'Pulse Shrink' },
													{ value: 'push', label: 'Push' },
													{ value: 'pop', label: 'Pop' },
													{ value: 'bounce-in', label: 'Bounce In' },
													{ value: 'bounce-out', label: 'Bounce Out' },
													{ value: 'rotate', label: 'Rotate' },
													{ value: 'grow-rotate', label: 'Grow Rotate' },
													{ value: 'float', label: 'Float' },
													{ value: 'sink', label: 'Sink' },
													{ value: 'bob', label: 'Bob' },
													{ value: 'hang', label: 'Hang' },
													{ value: 'skew', label: 'Skew' },
													{ value: 'skew-forward', label: 'Skew Forward' },
													{ value: 'skew-backward', label: 'Skew Backward' },
													{ value: 'wobble-vertical', label: 'Wobble Vertical' },
													{ value: 'wobble-horizontal', label: 'Wobble Horizontal' },
													{ value: 'wobble-to-bottom-right', label: 'Wobble to Bottom Right' },
													{ value: 'wobble-to-top-right', label: 'Wobble to Top Right' },
													{ value: 'wobble-skew', label: 'Wobble Skew' },
													{ value: 'buzz', label: 'Buzz' },
													{ value: 'buzz-out', label: 'Buzz Out' },
													{ value: 'forward', label: 'Forward' },
												]}
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
