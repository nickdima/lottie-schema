// To parse this data:
//
//   import { Convert, Animation } from "./file";
//
//   const animation = Convert.toAnimation(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Animation {
    /**
     * Assets
     */
    assets?: Asset[];
    /**
     * Chars
     */
    chars?: Char[];
    /**
     * 3-D
     */
    ddd?: number;
    /**
     * fonts
     */
    fonts?: Fonts;
    /**
     * Frame Rate
     */
    fr?: number;
    /**
     * Height
     */
    h?: number;
    /**
     * In Point
     */
    ip?: number;
    /**
     * Layers
     */
    layers?: AnimationLayer[];
    /**
     * Name
     */
    nm?: string;
    /**
     * Out Point
     */
    op?: number;
    /**
     * Players
     */
    players?: Player[];
    /**
     * Version
     */
    v?: string;
    /**
     * Width
     */
    w?: number;
}

export interface Asset {
    /**
     * End
     */
    e?: number;
    /**
     * Height
     */
    h?: number;
    /**
     * ID
     */
    id?: string;
    /**
     * Name
     */
    p?: string;
    /**
     * Path
     */
    u?: string;
    /**
     * Width
     */
    w?: number;
    /**
     * Layers
     */
    layers?: AssetLayer[];
}

export interface AssetLayer {
    /**
     * Auto-Orient
     */
    ao?: number;
    /**
     * Blend Mode
     */
    bm?: number;
    /**
     * Class
     */
    cl?: string;
    /**
     * 3d Layer
     */
    ddd?: number;
    /**
     * Effects
     */
    ef?: { [key: string]: any }[] | number;
    /**
     * Has Masks
     */
    hasMask?: number;
    /**
     * Index
     */
    ind?: number;
    /**
     * In Point
     */
    ip?: number;
    /**
     * Items
     */
    it?: LayerIt[];
    /**
     * Transform
     */
    ks?: KsObject;
    /**
     * layer HTML ID
     */
    ln?: string;
    /**
     * Mask Properties
     */
    maskProperties?: MaskProperty[];
    /**
     * Name
     */
    nm?: number | string;
    /**
     * Out Point
     */
    op?: number;
    /**
     * Parent
     */
    parent?: number;
    /**
     * shapes
     */
    shapes?: Shape[];
    /**
     * Stretch
     */
    sr?: number;
    /**
     * Start Time
     */
    st?: number;
    /**
     * Type
     */
    ty?: number;
    /**
     * Solid Color
     */
    sc?: string;
    /**
     * Solid Height
     */
    sh?: number;
    /**
     * Solid Width
     */
    sw?: number;
    /**
     * Reference ID
     */
    refId?: string;
    /**
     * Time Remapping
     */
    tm?: number;
    /**
     * Text Data
     */
    t?: TextData;
}

export interface LayerIt {
    /**
     * Direction
     */
    d?: number;
    /**
     * Vertices
     */
    ks?: Vertices;
    /**
     * Match Name
     */
    mn?: string;
    /**
     * Name
     */
    nm?: string;
    /**
     * Type
     */
    ty?: string;
    /**
     * Position
     */
    p?: ShapeP;
    /**
     * Rounded corners
     *
     * Rotation
     *
     * Radius
     */
    r?: ShapeR;
    /**
     * Size
     *
     * Start Point
     *
     * Start
     */
    s?: ShapeS;
    /**
     * Outer Radius
     */
    ir?: OuterRadius;
    /**
     * Outer Roundness
     */
    is?: OuterRoundness;
    /**
     * Points
     */
    pt?: Points;
    /**
     * Star Type
     */
    sy?: { [key: string]: any };
    /**
     * Color
     *
     * Copies
     */
    c?: Color;
    /**
     * Opacity
     *
     * Offset
     */
    o?: ShapeO;
    /**
     * Highlight Angle
     */
    a?: HighlightAngle;
    /**
     * End Point
     *
     * End
     */
    e?: EObject;
    /**
     * Gradient Colors
     */
    g?: { [key: string]: any };
    /**
     * Highlight Length
     */
    h?: HighlightLength;
    /**
     * Type
     */
    t?: { [key: string]: any };
    /**
     * Line Cap
     */
    lc?: number;
    /**
     * Line Join
     */
    lj?: number;
    /**
     * Miter Limit
     */
    ml?: number;
    /**
     * Stroke Width
     *
     * Width
     */
    w?: Width;
    /**
     * Merge Mode
     */
    mm?: number;
    /**
     * Items
     */
    it?: ItIt[];
    /**
     * Number of Properties
     */
    np?: number;
    /**
     * Composite
     */
    m?: number;
    /**
     * Transform
     */
    tr?: Transform;
}

/**
 * Highlight Angle
 */
export interface HighlightAngle {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

export interface PurpleK {
    /**
     * End
     */
    e?: number;
    /**
     * In Value
     */
    i?: PurpleI;
    /**
     * Start
     */
    s?: number;
    /**
     * Time
     */
    t?: number;
}

/**
 * In Value
 */
export interface PurpleI {
    /**
     * X axis
     */
    x?: number;
    /**
     * Y axis
     */
    y?: number;
}

/**
 * Color
 *
 * Copies
 */
export interface Color {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     *
     * Value
     */
    k?: FluffyK[] | number;
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

export interface FluffyK {
    /**
     * End
     */
    e?: number[] | number;
    /**
     * In Value
     */
    i?: FluffyI;
    /**
     * Name
     */
    nm?: string;
    /**
     * Out Value
     */
    o?: PurpleO;
    /**
     * Start
     */
    s?: number[] | number;
    /**
     * Time
     */
    t?: number;
}

/**
 * In Value
 */
export interface FluffyI {
    /**
     * X axis
     */
    x?: number;
    /**
     * Y axis
     */
    y?: number;
}

/**
 * Out Value
 */
export interface PurpleO {
    /**
     * X axis
     */
    x?: any[];
    /**
     * Y axis
     */
    y?: any[];
}

/**
 * End Point
 *
 * End
 */
export interface EObject {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     *
     * Value
     */
    k?: FluffyK[] | number;
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Highlight Length
 */
export interface HighlightLength {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Outer Radius
 */
export interface OuterRadius {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Outer Roundness
 */
export interface OuterRoundness {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

export interface ItIt {
    /**
     * Direction
     */
    d?: number;
    /**
     * Vertices
     */
    ks?: Vertices;
    /**
     * Match Name
     */
    mn?: string;
    /**
     * Name
     */
    nm?: string;
    /**
     * Type
     */
    ty?: string;
    /**
     * Position
     */
    p?: PurplePosition;
    /**
     * Rounded corners
     *
     * Rotation
     *
     * Radius
     */
    r?: PurpleRoundedCorners;
    /**
     * Size
     *
     * Start Point
     *
     * Start
     *
     * Scale
     */
    s?: PurpleSize;
    /**
     * Outer Radius
     */
    ir?: OuterRadius;
    /**
     * Outer Roundness
     */
    is?: OuterRoundness;
    /**
     * Points
     */
    pt?: Points;
    /**
     * Star Type
     */
    sy?: { [key: string]: any };
    /**
     * Color
     */
    c?: PurpleColor;
    /**
     * Opacity
     *
     * Offset
     */
    o?: PurpleOpacity;
    /**
     * Highlight Angle
     *
     * Anchor Point
     */
    a?: PurpleHighlightAngle;
    /**
     * End Point
     *
     * End
     */
    e?: EObject;
    /**
     * Gradient Colors
     */
    g?: { [key: string]: any };
    /**
     * Highlight Length
     */
    h?: HighlightLength;
    /**
     * Type
     */
    t?: { [key: string]: any };
    /**
     * Line Cap
     */
    lc?: number;
    /**
     * Line Join
     */
    lj?: number;
    /**
     * Miter Limit
     */
    ml?: number;
    /**
     * Stroke Width
     *
     * Width
     */
    w?: Width;
    /**
     * Merge Mode
     */
    mm?: number;
    /**
     * Items
     */
    it?: ItIt[];
    /**
     * Number of Properties
     */
    np?: number;
    /**
     * Skew Axis
     */
    sa?: ItSkewAxis;
    /**
     * Skew
     */
    sk?: ItSkew;
}

/**
 * Highlight Angle
 *
 * Anchor Point
 */
export interface PurpleHighlightAngle {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: FluffyK[] | number;
    /**
     * Expression
     */
    x?: string;
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
}

/**
 * Color
 */
export interface PurpleColor {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

export interface CKObject {
    /**
     * End
     */
    e?: number[];
    /**
     * In Value
     */
    i?: TentacledI;
    /**
     * Name
     */
    nm?: string;
    /**
     * Out Value
     */
    o?: PurpleO;
    /**
     * Start
     */
    s?: number[];
    /**
     * Time
     */
    t?: number;
}

/**
 * In Value
 */
export interface TentacledI {
    /**
     * X axis
     */
    x?: number;
    /**
     * Y axis
     */
    y?: number;
}

/**
 * Vertices
 */
export interface Vertices {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: TentacledK[] | KeysK;
    /**
     * Expression
     */
    x?: string;
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
}

export interface TentacledK {
    /**
     * End
     */
    e?: EElement[];
    /**
     * In Value
     */
    i?: StickyI;
    /**
     * Name
     */
    nm?: string;
    /**
     * Out Value
     */
    o?: FluffyO;
    /**
     * Start
     */
    s?: Empty[];
    /**
     * Time
     */
    t?: number;
}

/**
 * Value
 */
export interface EElement {
    /**
     * Closed
     */
    c?: boolean;
    /**
     * In Point
     */
    i?: Array<number[]>;
    /**
     * Out Point
     */
    o?: Array<number[]>;
    /**
     * Vertices
     */
    v?: Array<number[]>;
}

/**
 * In Value
 */
export interface StickyI {
    /**
     * X axis
     */
    x?: any[];
    /**
     * Y axis
     */
    y?: any[];
}

/**
 * Out Value
 */
export interface FluffyO {
    /**
     * X axis
     */
    x?: any[];
    /**
     * Y axis
     */
    y?: any[];
}

/**
 * Value
 */
export interface Empty {
    /**
     * Closed
     */
    c?: boolean;
    /**
     * In Point
     */
    i?: Array<number[]>;
    /**
     * Out Point
     */
    o?: Array<number[]>;
    /**
     * Vertices
     */
    v?: Array<number[]>;
}

/**
 * Value
 */
export interface KeysK {
    /**
     * Closed
     */
    c?: boolean;
    /**
     * In Point
     */
    i?: Array<number[]>;
    /**
     * Out Point
     */
    o?: Array<number[]>;
    /**
     * Vertices
     */
    v?: Array<number[]>;
}

/**
 * Opacity
 *
 * Offset
 */
export interface PurpleOpacity {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Position
 */
export interface PurplePosition {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Points
 */
export interface Points {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Rounded corners
 *
 * Rotation
 *
 * Radius
 */
export interface PurpleRoundedCorners {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Size
 *
 * Start Point
 *
 * Start
 *
 * Scale
 */
export interface PurpleSize {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     *
     * Value
     */
    k?: FluffyK[] | number;
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Skew Axis
 */
export interface ItSkewAxis {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Skew
 */
export interface ItSkew {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Stroke Width
 *
 * Width
 */
export interface Width {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Opacity
 *
 * Offset
 */
export interface ShapeO {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Position
 */
export interface ShapeP {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Rounded corners
 *
 * Rotation
 *
 * Radius
 */
export interface ShapeR {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Size
 *
 * Start Point
 *
 * Start
 */
export interface ShapeS {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     *
     * Value
     */
    k?: FluffyK[] | number;
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Transform
 */
export interface Transform {
    /**
     * Anchor Point
     */
    a?: TransformAnchorPoint;
    /**
     * Opacity
     */
    o?: TransformOpacity;
    /**
     * Position
     */
    p?: TransformPosition;
    /**
     * Position X
     */
    px?: PositionX;
    /**
     * Position Y
     */
    py?: PositionY;
    /**
     * Position Z
     */
    pz?: PositionZ;
    /**
     * Rotation
     */
    r?: TransformRotation;
    /**
     * Scale
     */
    s?: TransformScale;
    /**
     * Skew Axis
     */
    sa?: TransformSkewAxis;
    /**
     * Skew
     */
    sk?: TransformSkew;
}

/**
 * Anchor Point
 */
export interface TransformAnchorPoint {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Opacity
 */
export interface TransformOpacity {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Position
 */
export interface TransformPosition {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Position X
 */
export interface PositionX {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Position Y
 */
export interface PositionY {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Position Z
 */
export interface PositionZ {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Rotation
 */
export interface TransformRotation {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Scale
 */
export interface TransformScale {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Skew Axis
 */
export interface TransformSkewAxis {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Skew
 */
export interface TransformSkew {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Transform
 */
export interface KsObject {
    /**
     * Anchor Point
     */
    a?: TransformAnchorPoint;
    /**
     * Opacity
     */
    o?: TransformOpacity;
    /**
     * Position
     */
    p?: TransformPosition;
    /**
     * Position X
     */
    px?: PositionX;
    /**
     * Position Y
     */
    py?: PositionY;
    /**
     * Position Z
     */
    pz?: PositionZ;
    /**
     * Rotation
     */
    r?: TransformRotation;
    /**
     * Scale
     */
    s?: TransformScale;
    /**
     * Skew Axis
     */
    sa?: TransformSkewAxis;
    /**
     * Skew
     */
    sk?: TransformSkew;
}

export interface MaskProperty {
    /**
     * Inverted
     */
    inv?: boolean;
    /**
     * Mode
     */
    mode?: string;
    /**
     * Name
     */
    nm?: string;
    /**
     * Opacity
     */
    o?: MaskPropertyOpacity;
    /**
     * Points
     */
    pt?: Point[];
}

/**
 * Opacity
 */
export interface MaskPropertyOpacity {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

export interface Point {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: TentacledK[] | KeysK;
    /**
     * Expression
     */
    x?: string;
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
}

export interface Shape {
    /**
     * Direction
     */
    d?: number;
    /**
     * Vertices
     */
    ks?: Vertices;
    /**
     * Match Name
     */
    mn?: string;
    /**
     * Name
     */
    nm?: string;
    /**
     * Type
     */
    ty?: string;
    /**
     * Position
     */
    p?: ShapeP;
    /**
     * Rounded corners
     *
     * Rotation
     *
     * Radius
     */
    r?: ShapeR;
    /**
     * Size
     *
     * Start Point
     *
     * Start
     */
    s?: ShapeS;
    /**
     * Outer Radius
     */
    ir?: OuterRadius;
    /**
     * Outer Roundness
     */
    is?: OuterRoundness;
    /**
     * Points
     */
    pt?: Points;
    /**
     * Star Type
     */
    sy?: { [key: string]: any };
    /**
     * Color
     *
     * Copies
     */
    c?: Color;
    /**
     * Opacity
     *
     * Offset
     */
    o?: ShapeO;
    /**
     * Highlight Angle
     */
    a?: HighlightAngle;
    /**
     * End Point
     *
     * End
     */
    e?: EObject;
    /**
     * Gradient Colors
     */
    g?: { [key: string]: any };
    /**
     * Highlight Length
     */
    h?: HighlightLength;
    /**
     * Type
     */
    t?: { [key: string]: any };
    /**
     * Line Cap
     */
    lc?: number;
    /**
     * Line Join
     */
    lj?: number;
    /**
     * Miter Limit
     */
    ml?: number;
    /**
     * Stroke Width
     *
     * Width
     */
    w?: Width;
    /**
     * Merge Mode
     */
    mm?: number;
    /**
     * Items
     */
    it?: ItIt[];
    /**
     * Number of Properties
     */
    np?: number;
    /**
     * Composite
     */
    m?: number;
    /**
     * Transform
     */
    tr?: Transform;
}

/**
 * Text Data
 */
export interface TextData {
    /**
     * Animators
     */
    a?: Animator[];
    /**
     * Document
     */
    d?: Document;
    /**
     * More Options
     */
    m?: MoreOptions;
    /**
     * Text Path
     */
    p?: number;
}

export interface Animator {
    /**
     * Animated Properties
     */
    a?: AnimatedProperties;
    /**
     * Range Selecton
     */
    r?: RangeSelecton;
}

/**
 * Animated Properties
 */
export interface AnimatedProperties {
    /**
     * Anchor Point
     */
    a?: AAnchorPoint;
    /**
     * Fill Brightness
     */
    fb?: FillBrightness;
    /**
     * Fill Color
     */
    fc?: FillColor;
    /**
     * Fill Hue
     */
    fh?: FillHue;
    /**
     * Fill Saturation
     */
    fs?: FillSaturation;
    /**
     * Opacity
     */
    o?: AOpacity;
    /**
     * Position
     */
    p?: APosition;
    /**
     * Rotation
     */
    r?: ARotation;
    /**
     * Scale
     */
    s?: AScale;
    /**
     * Skew Axis
     */
    sa?: ASkewAxis;
    /**
     * Stroke Color
     */
    sc?: StrokeColor;
    /**
     * Skew
     */
    sk?: ASkew;
    /**
     * Stroke Width
     */
    sw?: StrokeWidth;
    /**
     * Tracking
     */
    t?: Tracking;
}

/**
 * Anchor Point
 */
export interface AAnchorPoint {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Fill Brightness
 */
export interface FillBrightness {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Fill Color
 */
export interface FillColor {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Fill Hue
 */
export interface FillHue {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Fill Saturation
 */
export interface FillSaturation {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Opacity
 */
export interface AOpacity {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Position
 */
export interface APosition {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Rotation
 */
export interface ARotation {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Scale
 */
export interface AScale {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Skew Axis
 */
export interface ASkewAxis {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Stroke Color
 */
export interface StrokeColor {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

/**
 * Skew
 */
export interface ASkew {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Stroke Width
 */
export interface StrokeWidth {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Tracking
 */
export interface Tracking {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Range Selecton
 */
export interface RangeSelecton {
    /**
     * Based On
     */
    bo?: number;
    /**
     * End
     */
    end?: End;
    /**
     * Max Amount
     */
    maxa?: MaxAmount;
    /**
     * Max Ease
     */
    maxe?: MaxEase;
    /**
     * Min Ease
     */
    mine?: MinEase;
    /**
     * Offset
     */
    Offset?: Offset;
    /**
     * Randomize
     */
    r?: number;
    /**
     * Range Units
     */
    ru?: number;
    /**
     * Shape
     */
    s?: number;
    /**
     * Start
     */
    start?: Start;
    /**
     * Type
     */
    t?: number;
}

/**
 * Offset
 */
export interface Offset {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * End
 */
export interface End {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Max Amount
 */
export interface MaxAmount {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Max Ease
 */
export interface MaxEase {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Min Ease
 */
export interface MinEase {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Start
 */
export interface Start {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     *
     * Keyframes
     */
    k?: PurpleK[] | number;
    /**
     * Expression
     */
    x?: string;
}

/**
 * Document
 */
export interface Document {
    /**
     * Keyframes
     */
    k?: Keyframe[];
}

export interface Keyframe {
    /**
     * Text Properties
     */
    s?: TextProperties;
    /**
     * Time
     */
    t?: number;
}

/**
 * Text Properties
 */
export interface TextProperties {
    /**
     * Font
     */
    f?: string;
    /**
     * Font Color
     */
    fc?: any[];
    /**
     * Justificaiton
     */
    j?: string;
    /**
     * Line Height
     */
    lh?: number;
    /**
     * letter-spacing
     */
    ls?: number;
    /**
     * Size
     */
    s?: number;
    /**
     * Text
     */
    t?: string;
    /**
     * Tracking
     */
    tr?: number;
}

/**
 * More Options
 */
export interface MoreOptions {
    /**
     * Anchor Point Grouping
     */
    a?: number;
    /**
     * Grouping Alignment
     */
    g?: GroupingAlignment;
}

/**
 * Grouping Alignment
 */
export interface GroupingAlignment {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Keyframes
     */
    k?: CKObject[];
    /**
     * In Tangent
     */
    ti?: any[];
    /**
     * Out Tangent
     */
    to?: any[];
    /**
     * Expression
     */
    x?: string;
}

export interface Char {
    /**
     * Character
     */
    ch?: string;
    /**
     * Character Data
     */
    data?: CharacterData;
    /**
     * Font Family
     */
    fFamily?: string;
    /**
     * Font Size
     */
    size?: string;
    /**
     * Font Style
     */
    style?: string;
    /**
     * Width
     */
    w?: number;
}

/**
 * Character Data
 */
export interface CharacterData {
    /**
     * Character Shapes
     */
    cs?: CharacterShape[];
}

export interface CharacterShape {
    /**
     * Items
     */
    i?: Items;
}

/**
 * Items
 */
export interface Items {
    /**
     * keys
     */
    k?: Keys;
}

/**
 * keys
 */
export interface Keys {
    /**
     * Animated
     */
    a?: number;
    /**
     * Property Index
     */
    ix?: number;
    /**
     * Value
     */
    k?: KeysK;
    /**
     * Expression
     */
    x?: string;
}

/**
 * fonts
 */
export interface Fonts {
    /**
     * fonts list
     */
    list?: FontsList[];
}

export interface FontsList {
    /**
     * Ascent
     */
    ascent?: number;
    /**
     * CSS
     */
    fClass?: string;
    /**
     * Family
     */
    fFamily?: string;
    /**
     * Name
     */
    fName?: string;
    /**
     * Path
     */
    fPath?: string;
    /**
     * Style
     */
    fStyle?: string;
    /**
     * Weight
     */
    fWeight?: string;
    /**
     * Origin
     */
    origin?: number;
}

export interface AnimationLayer {
    /**
     * Auto-Orient
     */
    ao?: number;
    /**
     * Blend Mode
     */
    bm?: number;
    /**
     * Class
     */
    cl?: string;
    /**
     * 3d Layer
     */
    ddd?: number;
    /**
     * Effects
     */
    ef?: { [key: string]: any }[] | number;
    /**
     * Has Masks
     */
    hasMask?: number;
    /**
     * Index
     */
    ind?: number;
    /**
     * In Point
     */
    ip?: number;
    /**
     * Items
     */
    it?: LayerIt[];
    /**
     * Transform
     */
    ks?: KsObject;
    /**
     * layer HTML ID
     */
    ln?: string;
    /**
     * Mask Properties
     */
    maskProperties?: MaskProperty[];
    /**
     * Name
     */
    nm?: number | string;
    /**
     * Out Point
     */
    op?: number;
    /**
     * Parent
     */
    parent?: number;
    /**
     * shapes
     */
    shapes?: Shape[];
    /**
     * Stretch
     */
    sr?: number;
    /**
     * Start Time
     */
    st?: number;
    /**
     * Type
     */
    ty?: number;
    /**
     * Solid Color
     */
    sc?: string;
    /**
     * Solid Height
     */
    sh?: number;
    /**
     * Solid Width
     */
    sw?: number;
    /**
     * Reference ID
     */
    refId?: string;
    /**
     * Time Remapping
     */
    tm?: number;
    /**
     * Text Data
     */
    t?: TextData;
}

export interface Player {
    /**
     * End
     */
    end?: number;
    /**
     * Loop
     */
    loop?: number;
    /**
     * Start
     */
    start?: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toAnimation(json: string): Animation {
        return cast(JSON.parse(json), r("Animation"));
    }

    public static animationToJson(value: Animation): string {
        return JSON.stringify(uncast(value, r("Animation")), null, 2);
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(typ: any, val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Animation": o([
        { json: "assets", js: "assets", typ: u(undefined, a(r("Asset"))) },
        { json: "chars", js: "chars", typ: u(undefined, a(r("Char"))) },
        { json: "ddd", js: "ddd", typ: u(undefined, 3.14) },
        { json: "fonts", js: "fonts", typ: u(undefined, r("Fonts")) },
        { json: "fr", js: "fr", typ: u(undefined, 3.14) },
        { json: "h", js: "h", typ: u(undefined, 3.14) },
        { json: "ip", js: "ip", typ: u(undefined, 3.14) },
        { json: "layers", js: "layers", typ: u(undefined, a(r("AnimationLayer"))) },
        { json: "nm", js: "nm", typ: u(undefined, "") },
        { json: "op", js: "op", typ: u(undefined, 3.14) },
        { json: "players", js: "players", typ: u(undefined, a(r("Player"))) },
        { json: "v", js: "v", typ: u(undefined, "") },
        { json: "w", js: "w", typ: u(undefined, 3.14) },
    ], "any"),
    "Asset": o([
        { json: "e", js: "e", typ: u(undefined, 3.14) },
        { json: "h", js: "h", typ: u(undefined, 3.14) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "p", js: "p", typ: u(undefined, "") },
        { json: "u", js: "u", typ: u(undefined, "") },
        { json: "w", js: "w", typ: u(undefined, 3.14) },
        { json: "layers", js: "layers", typ: u(undefined, a(r("AssetLayer"))) },
    ], "any"),
    "AssetLayer": o([
        { json: "ao", js: "ao", typ: u(undefined, 3.14) },
        { json: "bm", js: "bm", typ: u(undefined, 3.14) },
        { json: "cl", js: "cl", typ: u(undefined, "") },
        { json: "ddd", js: "ddd", typ: u(undefined, 3.14) },
        { json: "ef", js: "ef", typ: u(undefined, u(a(m("any")), 3.14)) },
        { json: "hasMask", js: "hasMask", typ: u(undefined, 3.14) },
        { json: "ind", js: "ind", typ: u(undefined, 3.14) },
        { json: "ip", js: "ip", typ: u(undefined, 3.14) },
        { json: "it", js: "it", typ: u(undefined, a(r("LayerIt"))) },
        { json: "ks", js: "ks", typ: u(undefined, r("KsObject")) },
        { json: "ln", js: "ln", typ: u(undefined, "") },
        { json: "maskProperties", js: "maskProperties", typ: u(undefined, a(r("MaskProperty"))) },
        { json: "nm", js: "nm", typ: u(undefined, u(3.14, "")) },
        { json: "op", js: "op", typ: u(undefined, 3.14) },
        { json: "parent", js: "parent", typ: u(undefined, 3.14) },
        { json: "shapes", js: "shapes", typ: u(undefined, a(r("Shape"))) },
        { json: "sr", js: "sr", typ: u(undefined, 3.14) },
        { json: "st", js: "st", typ: u(undefined, 3.14) },
        { json: "ty", js: "ty", typ: u(undefined, 3.14) },
        { json: "sc", js: "sc", typ: u(undefined, "") },
        { json: "sh", js: "sh", typ: u(undefined, 3.14) },
        { json: "sw", js: "sw", typ: u(undefined, 3.14) },
        { json: "refId", js: "refId", typ: u(undefined, "") },
        { json: "tm", js: "tm", typ: u(undefined, 3.14) },
        { json: "t", js: "t", typ: u(undefined, r("TextData")) },
    ], "any"),
    "LayerIt": o([
        { json: "d", js: "d", typ: u(undefined, 3.14) },
        { json: "ks", js: "ks", typ: u(undefined, r("Vertices")) },
        { json: "mn", js: "mn", typ: u(undefined, "") },
        { json: "nm", js: "nm", typ: u(undefined, "") },
        { json: "ty", js: "ty", typ: u(undefined, "") },
        { json: "p", js: "p", typ: u(undefined, r("ShapeP")) },
        { json: "r", js: "r", typ: u(undefined, r("ShapeR")) },
        { json: "s", js: "s", typ: u(undefined, r("ShapeS")) },
        { json: "ir", js: "ir", typ: u(undefined, r("OuterRadius")) },
        { json: "is", js: "is", typ: u(undefined, r("OuterRoundness")) },
        { json: "pt", js: "pt", typ: u(undefined, r("Points")) },
        { json: "sy", js: "sy", typ: u(undefined, m("any")) },
        { json: "c", js: "c", typ: u(undefined, r("Color")) },
        { json: "o", js: "o", typ: u(undefined, r("ShapeO")) },
        { json: "a", js: "a", typ: u(undefined, r("HighlightAngle")) },
        { json: "e", js: "e", typ: u(undefined, r("EObject")) },
        { json: "g", js: "g", typ: u(undefined, m("any")) },
        { json: "h", js: "h", typ: u(undefined, r("HighlightLength")) },
        { json: "t", js: "t", typ: u(undefined, m("any")) },
        { json: "lc", js: "lc", typ: u(undefined, 3.14) },
        { json: "lj", js: "lj", typ: u(undefined, 3.14) },
        { json: "ml", js: "ml", typ: u(undefined, 3.14) },
        { json: "w", js: "w", typ: u(undefined, r("Width")) },
        { json: "mm", js: "mm", typ: u(undefined, 3.14) },
        { json: "it", js: "it", typ: u(undefined, a(r("ItIt"))) },
        { json: "np", js: "np", typ: u(undefined, 3.14) },
        { json: "m", js: "m", typ: u(undefined, 3.14) },
        { json: "tr", js: "tr", typ: u(undefined, r("Transform")) },
    ], "any"),
    "HighlightAngle": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "PurpleK": o([
        { json: "e", js: "e", typ: u(undefined, 3.14) },
        { json: "i", js: "i", typ: u(undefined, r("PurpleI")) },
        { json: "s", js: "s", typ: u(undefined, 3.14) },
        { json: "t", js: "t", typ: u(undefined, 3.14) },
    ], "any"),
    "PurpleI": o([
        { json: "x", js: "x", typ: u(undefined, 3.14) },
        { json: "y", js: "y", typ: u(undefined, 3.14) },
    ], "any"),
    "Color": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("FluffyK")), 3.14)) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "FluffyK": o([
        { json: "e", js: "e", typ: u(undefined, u(a(3.14), 3.14)) },
        { json: "i", js: "i", typ: u(undefined, r("FluffyI")) },
        { json: "nm", js: "nm", typ: u(undefined, "") },
        { json: "o", js: "o", typ: u(undefined, r("PurpleO")) },
        { json: "s", js: "s", typ: u(undefined, u(a(3.14), 3.14)) },
        { json: "t", js: "t", typ: u(undefined, 3.14) },
    ], "any"),
    "FluffyI": o([
        { json: "x", js: "x", typ: u(undefined, 3.14) },
        { json: "y", js: "y", typ: u(undefined, 3.14) },
    ], "any"),
    "PurpleO": o([
        { json: "x", js: "x", typ: u(undefined, a("any")) },
        { json: "y", js: "y", typ: u(undefined, a("any")) },
    ], "any"),
    "EObject": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("FluffyK")), 3.14)) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "HighlightLength": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "OuterRadius": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "OuterRoundness": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "ItIt": o([
        { json: "d", js: "d", typ: u(undefined, 3.14) },
        { json: "ks", js: "ks", typ: u(undefined, r("Vertices")) },
        { json: "mn", js: "mn", typ: u(undefined, "") },
        { json: "nm", js: "nm", typ: u(undefined, "") },
        { json: "ty", js: "ty", typ: u(undefined, "") },
        { json: "p", js: "p", typ: u(undefined, r("PurplePosition")) },
        { json: "r", js: "r", typ: u(undefined, r("PurpleRoundedCorners")) },
        { json: "s", js: "s", typ: u(undefined, r("PurpleSize")) },
        { json: "ir", js: "ir", typ: u(undefined, r("OuterRadius")) },
        { json: "is", js: "is", typ: u(undefined, r("OuterRoundness")) },
        { json: "pt", js: "pt", typ: u(undefined, r("Points")) },
        { json: "sy", js: "sy", typ: u(undefined, m("any")) },
        { json: "c", js: "c", typ: u(undefined, r("PurpleColor")) },
        { json: "o", js: "o", typ: u(undefined, r("PurpleOpacity")) },
        { json: "a", js: "a", typ: u(undefined, r("PurpleHighlightAngle")) },
        { json: "e", js: "e", typ: u(undefined, r("EObject")) },
        { json: "g", js: "g", typ: u(undefined, m("any")) },
        { json: "h", js: "h", typ: u(undefined, r("HighlightLength")) },
        { json: "t", js: "t", typ: u(undefined, m("any")) },
        { json: "lc", js: "lc", typ: u(undefined, 3.14) },
        { json: "lj", js: "lj", typ: u(undefined, 3.14) },
        { json: "ml", js: "ml", typ: u(undefined, 3.14) },
        { json: "w", js: "w", typ: u(undefined, r("Width")) },
        { json: "mm", js: "mm", typ: u(undefined, 3.14) },
        { json: "it", js: "it", typ: u(undefined, a(r("ItIt"))) },
        { json: "np", js: "np", typ: u(undefined, 3.14) },
        { json: "sa", js: "sa", typ: u(undefined, r("ItSkewAxis")) },
        { json: "sk", js: "sk", typ: u(undefined, r("ItSkew")) },
    ], "any"),
    "PurpleHighlightAngle": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("FluffyK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
    ], "any"),
    "PurpleColor": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "CKObject": o([
        { json: "e", js: "e", typ: u(undefined, a(3.14)) },
        { json: "i", js: "i", typ: u(undefined, r("TentacledI")) },
        { json: "nm", js: "nm", typ: u(undefined, "") },
        { json: "o", js: "o", typ: u(undefined, r("PurpleO")) },
        { json: "s", js: "s", typ: u(undefined, a(3.14)) },
        { json: "t", js: "t", typ: u(undefined, 3.14) },
    ], "any"),
    "TentacledI": o([
        { json: "x", js: "x", typ: u(undefined, 3.14) },
        { json: "y", js: "y", typ: u(undefined, 3.14) },
    ], "any"),
    "Vertices": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("TentacledK")), r("KeysK"))) },
        { json: "x", js: "x", typ: u(undefined, "") },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
    ], "any"),
    "TentacledK": o([
        { json: "e", js: "e", typ: u(undefined, a(r("EElement"))) },
        { json: "i", js: "i", typ: u(undefined, r("StickyI")) },
        { json: "nm", js: "nm", typ: u(undefined, "") },
        { json: "o", js: "o", typ: u(undefined, r("FluffyO")) },
        { json: "s", js: "s", typ: u(undefined, a(r("Empty"))) },
        { json: "t", js: "t", typ: u(undefined, 3.14) },
    ], "any"),
    "EElement": o([
        { json: "c", js: "c", typ: u(undefined, true) },
        { json: "i", js: "i", typ: u(undefined, a(a(3.14))) },
        { json: "o", js: "o", typ: u(undefined, a(a(3.14))) },
        { json: "v", js: "v", typ: u(undefined, a(a(3.14))) },
    ], "any"),
    "StickyI": o([
        { json: "x", js: "x", typ: u(undefined, a("any")) },
        { json: "y", js: "y", typ: u(undefined, a("any")) },
    ], "any"),
    "FluffyO": o([
        { json: "x", js: "x", typ: u(undefined, a("any")) },
        { json: "y", js: "y", typ: u(undefined, a("any")) },
    ], "any"),
    "Empty": o([
        { json: "c", js: "c", typ: u(undefined, true) },
        { json: "i", js: "i", typ: u(undefined, a(a(3.14))) },
        { json: "o", js: "o", typ: u(undefined, a(a(3.14))) },
        { json: "v", js: "v", typ: u(undefined, a(a(3.14))) },
    ], "any"),
    "KeysK": o([
        { json: "c", js: "c", typ: u(undefined, true) },
        { json: "i", js: "i", typ: u(undefined, a(a(3.14))) },
        { json: "o", js: "o", typ: u(undefined, a(a(3.14))) },
        { json: "v", js: "v", typ: u(undefined, a(a(3.14))) },
    ], "any"),
    "PurpleOpacity": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "PurplePosition": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "Points": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "PurpleRoundedCorners": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "PurpleSize": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("FluffyK")), 3.14)) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "ItSkewAxis": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "ItSkew": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "Width": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "ShapeO": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "ShapeP": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "ShapeR": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "ShapeS": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("FluffyK")), 3.14)) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "Transform": o([
        { json: "a", js: "a", typ: u(undefined, r("TransformAnchorPoint")) },
        { json: "o", js: "o", typ: u(undefined, r("TransformOpacity")) },
        { json: "p", js: "p", typ: u(undefined, r("TransformPosition")) },
        { json: "px", js: "px", typ: u(undefined, r("PositionX")) },
        { json: "py", js: "py", typ: u(undefined, r("PositionY")) },
        { json: "pz", js: "pz", typ: u(undefined, r("PositionZ")) },
        { json: "r", js: "r", typ: u(undefined, r("TransformRotation")) },
        { json: "s", js: "s", typ: u(undefined, r("TransformScale")) },
        { json: "sa", js: "sa", typ: u(undefined, r("TransformSkewAxis")) },
        { json: "sk", js: "sk", typ: u(undefined, r("TransformSkew")) },
    ], "any"),
    "TransformAnchorPoint": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "TransformOpacity": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "TransformPosition": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "PositionX": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "PositionY": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "PositionZ": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "TransformRotation": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "TransformScale": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "TransformSkewAxis": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "TransformSkew": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "KsObject": o([
        { json: "a", js: "a", typ: u(undefined, r("TransformAnchorPoint")) },
        { json: "o", js: "o", typ: u(undefined, r("TransformOpacity")) },
        { json: "p", js: "p", typ: u(undefined, r("TransformPosition")) },
        { json: "px", js: "px", typ: u(undefined, r("PositionX")) },
        { json: "py", js: "py", typ: u(undefined, r("PositionY")) },
        { json: "pz", js: "pz", typ: u(undefined, r("PositionZ")) },
        { json: "r", js: "r", typ: u(undefined, r("TransformRotation")) },
        { json: "s", js: "s", typ: u(undefined, r("TransformScale")) },
        { json: "sa", js: "sa", typ: u(undefined, r("TransformSkewAxis")) },
        { json: "sk", js: "sk", typ: u(undefined, r("TransformSkew")) },
    ], "any"),
    "MaskProperty": o([
        { json: "inv", js: "inv", typ: u(undefined, true) },
        { json: "mode", js: "mode", typ: u(undefined, "") },
        { json: "nm", js: "nm", typ: u(undefined, "") },
        { json: "o", js: "o", typ: u(undefined, r("MaskPropertyOpacity")) },
        { json: "pt", js: "pt", typ: u(undefined, a(r("Point"))) },
    ], "any"),
    "MaskPropertyOpacity": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "Point": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("TentacledK")), r("KeysK"))) },
        { json: "x", js: "x", typ: u(undefined, "") },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
    ], "any"),
    "Shape": o([
        { json: "d", js: "d", typ: u(undefined, 3.14) },
        { json: "ks", js: "ks", typ: u(undefined, r("Vertices")) },
        { json: "mn", js: "mn", typ: u(undefined, "") },
        { json: "nm", js: "nm", typ: u(undefined, "") },
        { json: "ty", js: "ty", typ: u(undefined, "") },
        { json: "p", js: "p", typ: u(undefined, r("ShapeP")) },
        { json: "r", js: "r", typ: u(undefined, r("ShapeR")) },
        { json: "s", js: "s", typ: u(undefined, r("ShapeS")) },
        { json: "ir", js: "ir", typ: u(undefined, r("OuterRadius")) },
        { json: "is", js: "is", typ: u(undefined, r("OuterRoundness")) },
        { json: "pt", js: "pt", typ: u(undefined, r("Points")) },
        { json: "sy", js: "sy", typ: u(undefined, m("any")) },
        { json: "c", js: "c", typ: u(undefined, r("Color")) },
        { json: "o", js: "o", typ: u(undefined, r("ShapeO")) },
        { json: "a", js: "a", typ: u(undefined, r("HighlightAngle")) },
        { json: "e", js: "e", typ: u(undefined, r("EObject")) },
        { json: "g", js: "g", typ: u(undefined, m("any")) },
        { json: "h", js: "h", typ: u(undefined, r("HighlightLength")) },
        { json: "t", js: "t", typ: u(undefined, m("any")) },
        { json: "lc", js: "lc", typ: u(undefined, 3.14) },
        { json: "lj", js: "lj", typ: u(undefined, 3.14) },
        { json: "ml", js: "ml", typ: u(undefined, 3.14) },
        { json: "w", js: "w", typ: u(undefined, r("Width")) },
        { json: "mm", js: "mm", typ: u(undefined, 3.14) },
        { json: "it", js: "it", typ: u(undefined, a(r("ItIt"))) },
        { json: "np", js: "np", typ: u(undefined, 3.14) },
        { json: "m", js: "m", typ: u(undefined, 3.14) },
        { json: "tr", js: "tr", typ: u(undefined, r("Transform")) },
    ], "any"),
    "TextData": o([
        { json: "a", js: "a", typ: u(undefined, a(r("Animator"))) },
        { json: "d", js: "d", typ: u(undefined, r("Document")) },
        { json: "m", js: "m", typ: u(undefined, r("MoreOptions")) },
        { json: "p", js: "p", typ: u(undefined, 3.14) },
    ], "any"),
    "Animator": o([
        { json: "a", js: "a", typ: u(undefined, r("AnimatedProperties")) },
        { json: "r", js: "r", typ: u(undefined, r("RangeSelecton")) },
    ], "any"),
    "AnimatedProperties": o([
        { json: "a", js: "a", typ: u(undefined, r("AAnchorPoint")) },
        { json: "fb", js: "fb", typ: u(undefined, r("FillBrightness")) },
        { json: "fc", js: "fc", typ: u(undefined, r("FillColor")) },
        { json: "fh", js: "fh", typ: u(undefined, r("FillHue")) },
        { json: "fs", js: "fs", typ: u(undefined, r("FillSaturation")) },
        { json: "o", js: "o", typ: u(undefined, r("AOpacity")) },
        { json: "p", js: "p", typ: u(undefined, r("APosition")) },
        { json: "r", js: "r", typ: u(undefined, r("ARotation")) },
        { json: "s", js: "s", typ: u(undefined, r("AScale")) },
        { json: "sa", js: "sa", typ: u(undefined, r("ASkewAxis")) },
        { json: "sc", js: "sc", typ: u(undefined, r("StrokeColor")) },
        { json: "sk", js: "sk", typ: u(undefined, r("ASkew")) },
        { json: "sw", js: "sw", typ: u(undefined, r("StrokeWidth")) },
        { json: "t", js: "t", typ: u(undefined, r("Tracking")) },
    ], "any"),
    "AAnchorPoint": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "FillBrightness": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "FillColor": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "FillHue": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "FillSaturation": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "AOpacity": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "APosition": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "ARotation": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "AScale": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "ASkewAxis": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "StrokeColor": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "ASkew": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "StrokeWidth": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "Tracking": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "RangeSelecton": o([
        { json: "bo", js: "bo", typ: u(undefined, 3.14) },
        { json: "end", js: "end", typ: u(undefined, r("End")) },
        { json: "maxa", js: "maxa", typ: u(undefined, r("MaxAmount")) },
        { json: "maxe", js: "maxe", typ: u(undefined, r("MaxEase")) },
        { json: "mine", js: "mine", typ: u(undefined, r("MinEase")) },
        { json: "Offset", js: "Offset", typ: u(undefined, r("Offset")) },
        { json: "r", js: "r", typ: u(undefined, 3.14) },
        { json: "ru", js: "ru", typ: u(undefined, 3.14) },
        { json: "s", js: "s", typ: u(undefined, 3.14) },
        { json: "start", js: "start", typ: u(undefined, r("Start")) },
        { json: "t", js: "t", typ: u(undefined, 3.14) },
    ], "any"),
    "Offset": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "End": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "MaxAmount": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "MaxEase": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "MinEase": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "Start": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, u(a(r("PurpleK")), 3.14)) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "Document": o([
        { json: "k", js: "k", typ: u(undefined, a(r("Keyframe"))) },
    ], "any"),
    "Keyframe": o([
        { json: "s", js: "s", typ: u(undefined, r("TextProperties")) },
        { json: "t", js: "t", typ: u(undefined, 3.14) },
    ], "any"),
    "TextProperties": o([
        { json: "f", js: "f", typ: u(undefined, "") },
        { json: "fc", js: "fc", typ: u(undefined, a("any")) },
        { json: "j", js: "j", typ: u(undefined, "") },
        { json: "lh", js: "lh", typ: u(undefined, 3.14) },
        { json: "ls", js: "ls", typ: u(undefined, 3.14) },
        { json: "s", js: "s", typ: u(undefined, 3.14) },
        { json: "t", js: "t", typ: u(undefined, "") },
        { json: "tr", js: "tr", typ: u(undefined, 3.14) },
    ], "any"),
    "MoreOptions": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "g", js: "g", typ: u(undefined, r("GroupingAlignment")) },
    ], "any"),
    "GroupingAlignment": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, a(r("CKObject"))) },
        { json: "ti", js: "ti", typ: u(undefined, a("any")) },
        { json: "to", js: "to", typ: u(undefined, a("any")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "Char": o([
        { json: "ch", js: "ch", typ: u(undefined, "") },
        { json: "data", js: "data", typ: u(undefined, r("CharacterData")) },
        { json: "fFamily", js: "fFamily", typ: u(undefined, "") },
        { json: "size", js: "size", typ: u(undefined, "") },
        { json: "style", js: "style", typ: u(undefined, "") },
        { json: "w", js: "w", typ: u(undefined, 3.14) },
    ], "any"),
    "CharacterData": o([
        { json: "cs", js: "cs", typ: u(undefined, a(r("CharacterShape"))) },
    ], "any"),
    "CharacterShape": o([
        { json: "i", js: "i", typ: u(undefined, r("Items")) },
    ], "any"),
    "Items": o([
        { json: "k", js: "k", typ: u(undefined, r("Keys")) },
    ], "any"),
    "Keys": o([
        { json: "a", js: "a", typ: u(undefined, 3.14) },
        { json: "ix", js: "ix", typ: u(undefined, 3.14) },
        { json: "k", js: "k", typ: u(undefined, r("KeysK")) },
        { json: "x", js: "x", typ: u(undefined, "") },
    ], "any"),
    "Fonts": o([
        { json: "list", js: "list", typ: u(undefined, a(r("FontsList"))) },
    ], "any"),
    "FontsList": o([
        { json: "ascent", js: "ascent", typ: u(undefined, 3.14) },
        { json: "fClass", js: "fClass", typ: u(undefined, "") },
        { json: "fFamily", js: "fFamily", typ: u(undefined, "") },
        { json: "fName", js: "fName", typ: u(undefined, "") },
        { json: "fPath", js: "fPath", typ: u(undefined, "") },
        { json: "fStyle", js: "fStyle", typ: u(undefined, "") },
        { json: "fWeight", js: "fWeight", typ: u(undefined, "") },
        { json: "origin", js: "origin", typ: u(undefined, 3.14) },
    ], "any"),
    "AnimationLayer": o([
        { json: "ao", js: "ao", typ: u(undefined, 3.14) },
        { json: "bm", js: "bm", typ: u(undefined, 3.14) },
        { json: "cl", js: "cl", typ: u(undefined, "") },
        { json: "ddd", js: "ddd", typ: u(undefined, 3.14) },
        { json: "ef", js: "ef", typ: u(undefined, u(a(m("any")), 3.14)) },
        { json: "hasMask", js: "hasMask", typ: u(undefined, 3.14) },
        { json: "ind", js: "ind", typ: u(undefined, 3.14) },
        { json: "ip", js: "ip", typ: u(undefined, 3.14) },
        { json: "it", js: "it", typ: u(undefined, a(r("LayerIt"))) },
        { json: "ks", js: "ks", typ: u(undefined, r("KsObject")) },
        { json: "ln", js: "ln", typ: u(undefined, "") },
        { json: "maskProperties", js: "maskProperties", typ: u(undefined, a(r("MaskProperty"))) },
        { json: "nm", js: "nm", typ: u(undefined, u(3.14, "")) },
        { json: "op", js: "op", typ: u(undefined, 3.14) },
        { json: "parent", js: "parent", typ: u(undefined, 3.14) },
        { json: "shapes", js: "shapes", typ: u(undefined, a(r("Shape"))) },
        { json: "sr", js: "sr", typ: u(undefined, 3.14) },
        { json: "st", js: "st", typ: u(undefined, 3.14) },
        { json: "ty", js: "ty", typ: u(undefined, 3.14) },
        { json: "sc", js: "sc", typ: u(undefined, "") },
        { json: "sh", js: "sh", typ: u(undefined, 3.14) },
        { json: "sw", js: "sw", typ: u(undefined, 3.14) },
        { json: "refId", js: "refId", typ: u(undefined, "") },
        { json: "tm", js: "tm", typ: u(undefined, 3.14) },
        { json: "t", js: "t", typ: u(undefined, r("TextData")) },
    ], "any"),
    "Player": o([
        { json: "end", js: "end", typ: u(undefined, 3.14) },
        { json: "loop", js: "loop", typ: u(undefined, 3.14) },
        { json: "start", js: "start", typ: u(undefined, 3.14) },
    ], "any"),
};
